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

  'POST': function(req, res){
    var file = archive.paths.archivedSites;
    var fullbody = ""
    req.on('data', function(data){
      fullbody+= data;
    })
    req.on('end', function(){
      fullbody = fullbody.slice(4);
      if(archive.isUrlInList(fullbody)){
        httpHelpers.serveAssets(res, file)
      }else{
        archive.addUrlToList(fullbody);
        var loading = archive.paths.siteAssets + "/loading.html"
        httpHelpers.serveAssets(res,loading)
      }

      //fullbody
      //see if file exists 

    })
  },

  'OPTIONS': function(req, res){
    httpHelpers.serveAssets(res, " empty response ")
  }

}// END ROUTER


exports.handleRequest = function (req, res) {

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
