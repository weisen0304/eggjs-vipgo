/*
 * @Author: Weisen
 * @Date: 2019-11-11 16:51:46
 * @Github: https://github.com/weisen0304
 */
'use strict';
const Service = require('egg').Service;
const fs = require('fs');
const path = require('path');
const sendToWormhole = require('stream-wormhole');

class UploadService extends Service {
  async index() {
    const ctx = this.ctx;
    const stream = await ctx.getFileStream();
    const fileName = stream.filename;

    const target = path.join(
      this.config.baseDir,
      `app/public/comfiles/${stream.filename}`
    );
    const result = await new Promise((resolve, reject) => {
      const remoteFileStream = fs.createWriteStream(target);
      stream.pipe(remoteFileStream);
      let errFlag;
      remoteFileStream.on('error', err => {
        errFlag = true;
        sendToWormhole(stream);
        remoteFileStream.destroy();
        reject(err);
      });

      remoteFileStream.on('finish', async () => {
        if (errFlag) return;
        resolve({ fileName, name: stream.fields.name });
      });
    });
    return result;
  }
}

module.exports = UploadService;
