/*
 * @Author: Weisen
 * @Date: 2019-11-05 17:55:10
 * @Github: https://github.com/weisen0304
 */
'use strict';
const Service = require('egg').Service;

class CouponServie extends Service {
  constructor(ctx) {
    super(ctx);
    this.root = 'https://localhost:7001';
  }

  async list(params) {
    const result = await this.request('/coupons', {
      method: 'post',
      data: params,
      contentType: 'json',
    });

    this.checkSuccess(result);
    return result.data.data;
  }
}
