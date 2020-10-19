'use strict';

const BaseService = require('./base');
const _ = require('lodash');
const { md5 } = require('../utils/utils');

class OutapiService extends BaseService {
  /*
   * api
   */
  async api(body) {
    const res = {
      code: 1000,
      message: 'unknown error',
    };

    try {
      //throw new Error('Sync Error');
      body.data.app = 'box';
      const url = this.app.config.outApi[body.out_url];
      const response = await this.app.curl(url, {
        method: body.method,
        contentType: 'application/json',
        data: body.data,
        dataType: 'json',
        timeout: 15000,
      });
      const result = response.data;
      if (this.app.config.env === 'local') {
        this.app.logger.info('[OutapiService] [api]: info result:%j', result);
      }
      // this.app.logger.info('[OutapiService] [api]: result:%j', result);
      if (result.code !== CODE.SUCCESS) {
        this.app.logger.error('[OutapiService] [api]: res error result:%j', result);
      }
      return result;
    } catch (e) {
      this.app.logger.error('[OutapiService] [api]:  ERROR ', e);
    }

    return res;
  }

  /*
   * beforeDeal
   */
  async beforeDeal(body) {
    let res = {
      next: true,
      async: false,
      code: 0,
      message: '',
      data: null
    };
    switch (body.out_url) {
      case 'dataIncr' :
        res = this.beforeDataIncr(res, body);
        break;
      case 'mySites' :
          res = this.beforeMySites(res, body);
          break;  
    }

    return res;
  }  

  async beforeDataIncr(res, body) {
    const data = body.data;
    const opRes = await this.service.lowdb.getFeedActionLog(data.uid, data.type, data.fid);
    if (opRes) {
      res.next = false;
      res.code = -1000;
      res.message = 'beforeDataIncr already cache';
      return res;
    }
    res.async = true;
    this.service.lowdb.setFeedAction(data.uid, data.type, data.fid);

    return res;
  }

  async beforeMySites(res, body) {
    const key = md5(JSON.stringify(body))
    console.log('key', key)
    const sitesRes = await this.service.lowdb.getKv(body.out_url);
    if (sitesRes) {
      res.next = false;
      res.message = body.out_url + ' already cache';
      res.data = sitesRes;
      return res;
    }

    return res;
  }

  /*
   * afterDeal
   */
  async afterDeal(body, result) {
    switch (body.out_url) {
      case 'mySites' :
        result = this.afterMySites(body, result);
        break;
      case 'saveMySite' :
        result = this.afterSaveMySite(body, result);
        break;
      case 'delMySite' :
        result = this.afterDelMySite(body, result);
        break;
    }

    return result;
  }  

  async afterMySites(body, result) {
    this.service.lowdb.setKv(body.out_url, result.data);

    return result;
  }

  async afterSaveMySite(body, result) {
    this.service.lowdb.delKv('mySites');

    return result;
  }

  async afterDelMySite(body, result) {
    this.service.lowdb.delKv('mySites');

    return result;
  }
}

module.exports = OutapiService;
