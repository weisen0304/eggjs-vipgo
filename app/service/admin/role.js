/*
 * @Author: Weisen
 * @Date: 2019-11-05 18:00:22
 * @Github: https://github.com/weisen0304
 */
'use strict';

const Service = require('egg').Service;

class RoleService extends Service {
  // eslint-disable-next-line no-useless-constructor
  constructor(ctx) {
    super(ctx);
    this.root = 'https://cnodejs.org/api/v1';
  }

  async list(params) {
    const result = await this.request('/roles', {
      data: params,
    });
    this.checkSuccess(result);
    return result.data.data;
  }
}

module.exports = RoleService;
