/*
 * @Author: Weisen
 * @Date: 2019-09-29 09:49:12
 * @Github: https://github.com/weisen0304
 */
'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const RoleAccessSchema = new Schema({
    access_id: {
      type: Schema.Types.ObjectId,
    },
    role_id: {
      type: Schema.Types.ObjectId,
    },
  });

  return mongoose.model('RoleAccess', RoleAccessSchema, 'role_access');
};
