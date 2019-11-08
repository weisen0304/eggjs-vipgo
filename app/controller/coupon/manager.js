/*
 * @Author: Weisen
 * @Date: 2019-11-05 17:06:29
 * @Github: https://github.com/weisen0304
 */
'use strict';
const BaseController = require('./base');

class ManagerController extends BaseController {
  // 优惠券列表
  async list() {
    const { ctx } = this;

    const list = await ctx.model.Coupon.find({});

    await ctx.render('admin/coupon/list', { list });
  }

  async get() {
    const { ctx } = this;

    const list = await ctx.model.Coupon.find({});

    ctx.body = {
      code: 200,
      data: list,
      msg: 'success',
      time: +new Date(),
      _time: new Date(),
    };
  }
}

module.exports = ManagerController;
