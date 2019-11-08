/*
 * @Author: Weisen
 * @Date: 2019-09-29 09:49:12
 * @Github: https://github.com/weisen0304
 */
'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const date = new Date();
  const RoleSchema = {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    mobile: {
      type: String,
    },
    status: {
      type: Number,
      default: 1,
    },
    add_time: {
      type: Number,
      default: date.getTime(),
    },
  };
  return mongoose.model('Role', RoleSchema, 'role');
};
