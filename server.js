'use strict';

const config = require('config');
const express = require('express');
const compression = require('compression');
const http = require('http');
const https = require('https');
const fs = require('fs');
const preCompressedAssets = require('./preCompressedAssets');

const httpPort = Number.parseInt(config.get('httpPort'));
const httpsPort = Number.parseInt(config.get('httpsPort'));
const loggingRequests = config.get('loggingRequests');
const distDir = fs.realpathSync(`${__dirname}/dist`);

let listeningForHttps = false;

const init = () => {
  // any async initialization
  return Promise.resolve();
};

const startHttp = () => {
  if (Number.isInteger(httpPort)) {
    http.createServer(app).listen(httpPort, function () {
      console.log(`Listening for HTTP on port ${httpPort}`);
    });
  }
};

const startHttps = () => {
  if (Number.isInteger(httpsPort)) {
    let options = {
      // self-signed (okay when behind load balancer/proxy)
      key  : fs.readFileSync('cert.key'),
      cert : fs.readFileSync('cert.crt')
    };
    https.createServer(options, app).listen(httpsPort, function () {
      console.log(`Listening for HTTPS on port ${httpsPort}`);
      listeningForHttps = true;
    });
  }
};

const logRequest = (req, res, next) => {
  if (loggingRequests) {
    console.log(`${req.method} ${req.url}`);
  }
  return next();
};

// TODO possibly could be better with 'trust proxy' when in AWS
const secureIt = (req, res, next) => {
  if (!listeningForHttps) {
    return next();
  }
  const forwardedProto = req.headers['x-forwarded-proto'];
  if (!req.secure || forwardedProto == 'http') {
    const host = req.headers['host'].replace(httpPort, httpsPort);
    return res.redirect(307, `https://${host}${req.originalUrl}`);
  }
  res.setHeader('Strict-Transport-Security', 'max-age=86400'); // 1 day
  next();
};

const app = express();
app.set('x-powered-by', false);
app.use(secureIt);
app.use(preCompressedAssets(/(\.html|\.js|\.css)$/, distDir));
app.use(compression());
app.use(logRequest);
app.use('/', express.static(distDir));

init().then(() => {
  startHttp();
  startHttps();
});
