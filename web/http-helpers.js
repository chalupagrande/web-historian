var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');


exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(res, file, callback, statusCode) {
  statusCode = statusCode || 200;
  res.writeHead(statusCode, headers);


  fs.readFile(file, function(err, data){
    // debugger;
    if(err){
      console.log("THE ERROR IS " + err)

    }
    res.end(data);
  });


  // // I am not sure what the call back does yet. 
  // if(callback){ callback() } ;

};



// As you progress, keep thinking about what helper functions you can put here!
