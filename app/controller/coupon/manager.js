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
    const list = await this.ctx.model.Coupon.find({});
    await this.ctx.render('admin/coupon/list', { list });
  }

  // 渲染添加优惠券页面
  async add() {
    const list = await this.ctx.model.Coupon.find({});
    await this.ctx.render('admin/coupon/add', { list });
  }

  // 添加优惠券
  async doAdd() {
    const postData = this.ctx.request.body;
    postData.product_id = 6959252;
    postData.final_price_format = '$' + postData.final_price;
    postData.price_format = '$' + postData.price;
    const result = new this.ctx.model.Coupon(postData);
    // 查询管理员是否存在
    // const adminResult = await this.ctx.model.Coupon.find({});
    // if (adminResult.length > 0) {
    //   await this.messageNotify(1, '添加失败,管理员已存在');
    // } else {
    //   await result.save();
    //   await this.messageNotify(0, '管理员添加成功');
    // }
    await result.save();
    await this.messageNotify(0, '优惠券添加成功');
  }

  // 临时优惠券API
  async get() {
    const list = await this.ctx.model.Coupon.find({});
    this.ctx.body = await {
      code: 200,
      data: list,
      msg: 'success',
      time: +new Date(),
      _time: new Date(),
    };
  }
}

module.exports = ManagerController;
