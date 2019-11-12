/*
 * @Author: Weisen
 * @Date: 2019-11-11 16:52:54
 * @Github: https://github.com/weisen0304
 */
'use strict';

const fs = require('fs');
const path = require('path');
const awaitWriteStream = require('await-stream-ready').write;
const sendToWormhole = require('stream-wormhole');
const formidable = require('formidable');
const Controller = require('egg').Controller;

class FileController extends Controller {
  async parse(req) {
    const form = new formidable.IncomingForm();
    return new Promise(resolve => {
      form.parse(req, (err, fields, files) => {
        resolve({ fields, files });
      });
    });
  }

  /**
   * 上传文件，兼容单文件和多文件
   */
  async upload() {
    console.log('upload');
    const { ctx, logger } = this;
    const extraParams = await this.parse(ctx.req);
    const { customName, isAjax } = extraParams && extraParams.fields;
    // logger.info(multipleFile, customName, isAjax);
    if (isAjax === 'yes') {
      const urls = [];
      for (const key in extraParams.files) {
        const file = extraParams.files[key];
        logger.info('file.name', file.name);
        logger.info('customName', customName);
        const stream = fs.createReadStream(file.path);
        const fileName = customName
          ? customName + path.extname(file.name)
          : file.name;
        const target = path.join(
          this.config.baseDir,
          'app/public/upload',
          fileName
        );
        const writeStream = fs.createWriteStream(target);
        try {
          await awaitWriteStream(stream.pipe(writeStream));
        } catch (err) {
          await sendToWormhole(stream);
          throw err;
        }
        urls.push(
          this.config.cluster.listen.myPath + '/public/upload/' + fileName
        );
      }
      ctx.body = {
        urls,
        success: 'ok',
      };
    }
  }
}

module.exports = FileController;
