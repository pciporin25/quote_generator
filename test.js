var request = require('request');

var quoteId = Math.floor((Math.random()*4194)+1);
let quote = null;
let author = null;
var exports = module.exports = {};

var options = {
  url: `http://www.quotedb.com/quotes/1979`
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {

    var strung = body.toString();

    var start = strung.search("title")+6;
    var end = strung.search("</title");

    var extracted = strung.substring(start,end);
    console.log("extracted is", extracted);
    var authIndex = extracted.indexOf(". by ");
    console.log("authIndex is", authIndex);
    console.log(extracted.substring(authIndex));

    quote = extracted.substring(0,authIndex+1);
    author = extracted.substring(authIndex+5);

    //exports.quote = quote;
    console.log("quote is ", quote);
    //exports.author = author;
    console.log("author is ", author);
  }
  else {
    console.error(error);
  }
}

request(options,callback);
