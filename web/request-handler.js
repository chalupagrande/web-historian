var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers');
// require more modules/folders here!




var actions = {

  'GET': function(req, res){
    var file = archive.paths.siteAssets + "/index.html";
    // debugger;
    httpHelpers.serveAssets(res, file);
  },

  'POST': function(req, res, file){
    httpHelpers.serveAssets(res, file, callback, 201)
  },

  'OPTIONS': function(req, res){
    httpHelpers.serveAssets(res, " empty response ")
  }

}// END ROUTER


exports.handleRequest = function (req, res) {
  // res.end(archive.paths.list);

  var action = actions[req.method];
  //if GET 
    // index.html
  //if POST 
    //if its archived 
      //get archived
      //return html of page requested  
    // else 
      // post to text 
      // give loading 

  if (action){
    action(req, res);
  } else {
    httpHelpers.serveAssets(res, "Invalid request", null, 404);
  }
};
