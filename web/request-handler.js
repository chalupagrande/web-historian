var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!




var actions = {

  'GET': function(req, res){
    var asset = 'index.html';
    serveAssets(res, asset, cb, 200);
  },

  'POST': function(req, res, asset){
    serveAssets(res, asset, callback, 201)
  },

  'OPTIONS': function(req, res){
    serveAssets(res, " empty response ")
  }

}// END ROUTER


exports.handleRequest = function (req, res) {
  res.end(archive.paths.list);

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
    serveAssets(res, "Invalid request", null, 404);
  }
};
