/*
 * @Author: Weisen
 * @Date: 2019-09-29 09:49:12
 * @Github: https://github.com/weisen0304
 */
'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = (exports = {});
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1548043156813_8883';

  // 配置session
  config.session = {
    key: 'SESSION_ID',
    maxAge: 8640000,
    httpOnly: true, // 只是服务端有效
    encrypt: true, // 加密
    renew: true, // 延长会话有效期
  };

  // 自定义中间件
  config.middleware = [ 'adminauth' ];
  config.adminauth = {
    match: [ '/admin', '/coupon' ],
  };

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/shop',
      options: {},
    },
  };

  // 设置静态文件
  // config.static = {
  //   prefix: '/public/',
  //   dir: path.join(appInfo.baseDir, 'app/public/'),
  // };

  // 端口地址
  config.cluster = {
    listen: {
      path: '',
      port: 7001,
      hostname: '0.0.0.0',
      myPath: 'http://localhost:7001',
    },
  };

  // 配置模板引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  return config;
};
