// Use the code in `archive-helpers.js` to actually download the urls
// that are waiting.
var helpers = require('../helpers/archive-helpers.js')



// check the txt file
// download the new urls
// put the data in folders in sites

helpers.readListOfUrls(function(urlArray){
  for (var i = 0; i < urlArray.length; i++){
    if (helpers.isUrlArchived(urlArray[i], function(boolean){

        if(!boolean){
          //scrape
          
          
        }
    }))
  }
})