/*
 * @Author: Weisen
 * @Date: 2019-11-05 17:10:17
 * @Github: https://github.com/weisen0304
 */
'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const date = new Date();
  const CouponSchema = {
    product_id: {
      type: String,
    },
    art_name: {
      type: String,
    },
    domain: {
      type: String,
    },
    price: {
      type: Number,
    },
    final_price: {
      type: String,
    },
    discount_type: {
      type: String,
    },
    discount: {
      type: String,
    },
    art_expiry: {
      type: String,
      default: date.getTime(),
    },
    image_large: {
      type: String,
    },
    fba: {
      type: String,
    },
    product_group: {
      type: String,
    },
    shipping: {
      type: String,
    },
    art_not_need_verfiy: {
      type: String,
    },
    art_hide_date: {
      type: String,
      default: date.getTime(),
    },
    vouchers_limit_day: {
      type: String,
    },
    single_voucher_description: {
      type: String,
    },
    user_id: {
      type: String,
    },
    single_voucher: {
      type: String,
    },
    next_promote_time: {
      type: String,
    },
    review_star: {
      type: String,
    },
    review_num: {
      type: String,
    },
    recommend_type: {
      type: String,
    },
    voucher_limit: {
      type: String,
    },
    flag: {
      type: String,
    },
    currency_sign: {
      type: String,
    },
    currency: {
      type: String,
    },
    currency_show: {
      type: String,
    },
    shart_url: {
      type: String,
    },
    is_group: {
      type: Number,
    },
    origin_group_price: {
      type: Number,
    },
    group_price: {
      type: Number,
    },
    discount_display: {
      type: String,
    },
    you_save: {
      type: Number,
    },
    final_price_format: {
      type: String,
    },
    price_format: {
      type: String,
    },
    you_save_format: {
      type: String,
    },
    expiry: {
      type: Number,
    },
    bullet_points: {
      type: Array,
    },
    expiry_display: {
      type: String,
    },
    button_msg: {
      type: String,
    },
    next_sale_time: {
      type: Number,
    },
    image: {
      type: String,
    },
    voucher_remaining: {
      type: Number,
    },
    blood: {
      type: Number,
    },
    up: {
      type: String,
    },
    comment_num: {
      type: Number,
    },
  };
  return mongoose.model('Coupon', CouponSchema, 'coupon');
};
