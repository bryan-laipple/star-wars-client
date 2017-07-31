'use strict';

// Modifications made from npm package pre-compressed-assets@1.1.0:
// - Ignore br since ng build --prod --aot just provides us .gz by default
// - Check for existence of .gz asset before updating request.url
const mime = require('mime-types');
const fs = require('fs');

module.exports = function preCompressAssets(urlRegexp, assetDir) {

  return function compress(request, response, next) {

    //Check if we need to do something
    const acceptEncoding = request.headers['accept-encoding'] || '';
    if (
      !urlRegexp.test(request.url) //Request url matches given regexp?
      || (request.method !== 'GET' && request.method !== 'HEAD') //GET/HEAD request?
    ) {
      return next();
    }

    //Get the original mime type and default character set
    const contentType = mime.lookup(request.url);
    const characterSet = mime.charset(contentType);

    //Set the content type and default character set according to the original file
    response.setHeader('Content-Type', contentType + '; charset=' + characterSet);

    //
    // Let's ignore .br for now...
    //
    // if(acceptEncoding.indexOf('br') > -1) {
    // 	//Change url based on encoding type.
    // 	request.url = request.url + ".br";
    // 	//Content encoding
    // 	response.setHeader('Content-Encoding', 'br');
    // } else
    if (acceptEncoding.indexOf('gzip') > -1) {
      const gzUrl = request.url + '.gz';
      if (fs.existsSync(assetDir + gzUrl)) {
        //Change url based on encoding type.
        request.url = gzUrl;
        //Content encoding
        response.setHeader('Content-Encoding', 'gzip');
      }
    }

    //Vary
    const vary = response.getHeader('Vary');
    if (!vary) {
      response.setHeader('Vary', 'Accept-Encoding');
    } else if (!~vary.indexOf('Accept-Encoding')) {
      response.setHeader('Vary', vary + ', Accept-Encoding');
    }
    return next();
  };
};
