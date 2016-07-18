var request = require('request');
var cheerio = require('cheerio');

var quoteId = Math.floor((Math.random()*4194)+1);
let quote = null;
let author = null;
var exports = module.exports = {};

//console.log(quoteId);
//console.log(`http://www.quotedb.com/quotes/${quoteId}`);

var options = {
  url: `http://www.quotedb.com/quotes/${quoteId}`
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    //console.log(body) // Show the HTML for the Google homepage.
    //var $ = cheerio.load(body.toString());
    var strung = body.toString();
    var start = strung.search("title")+6;
    //console.log("start is ", start);
    var end = strung.search("</title");
    //console.log("end is ", end);
    //var extracted = strung.substring(start,end);
    var extracted = strung.substring(start,end);
    var authIndex = extracted.search(". by ");

    /*
    exports.quote = function() {
      return extracted.substring(0,authIndex+1);
    };

    exports.author = function() {
      return extracted.substring(authIndex+5);
    };
    */

    //console.log("extracted is",extracted);


    //var authIndex = extracted.search(". by ");
    //console.log("authIndex is",authIndex);
    quote = extracted.substring(0,authIndex+1);
    //console.log("quote is ",quote);
    author = extracted.substring(authIndex+5);
    //console.log("\n\n\nauthor is ",author);
    //console.log($('title').find('title'));
    setExports();
    exports.quote = quote;

    exports.author = author;
    //console.log("\nran!!");
    //console.log("quote is",quote);
  }
  else {
    console.error(error);
  }
}

exports.run = request(options,callback);

function setExports() {

}

/*
function extractData() {
  request(`http://www.quotedb.com/quotes/${quoteId}`, function (error, response, body) {

  });
};
*/
