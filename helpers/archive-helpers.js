var fs = require('fs');
var path = require('path');
var _ = require('underscore');
// var httpHelpers = require("./http-helpers");

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

var lineNumber = 0;

exports.readListOfUrls = function(cb){
  var listPath = exports.paths.list;
  
  fs.readFile(listPath, function(err, data){
    if(err){
      console.log(err)
      throw err;
    }
    if(cb){
      cb(data.toString().split("\n"));
    }
  })
  //do callback here
};

exports.isUrlInList = function(url, cb){
  exports.readListOfUrls(function(data){
    //data is array
    if(data.indexOf(url) > -1){
      debugger;
      return true;
    }
    debugger;
    return false;
  })
};

exports.addUrlToList = function(url){

  debugger;
  url += "\n";
  fs.appendFile(exports.paths.list, url, function(err){
    if(err){
      console.log(err)
      throw err;
    }
  })
  
};

exports.isUrlArchived = function(url, cb){
  var folderPath = exports.paths.archivedSites + '/' + url;
  fs.exists(folderPath, function(exists){
    if (exists) {
      if(cb){
        cb(folderPath)
      }
    } else {
      var loading = exports.paths.siteAssets + "/loading.html"
      httpHelpers.serveAssets(res,loading, null, 302);
    }
  })

};

exports.downloadUrls = function(){
  var file = exports.paths.list;
  fs.readFile(file, function(err, data){
    if(err){
      console.log ("THIS IS THE ERROR : " + err);
      throw err
    }else{
      var urlArray = data.split("/n");
      for(var i = 0; i < urlArray.length; i++){
        if(!isUrlArchived(urlArray[i])){
          //scrape the site
          debugger;
        }
      }
    }

  })

};
