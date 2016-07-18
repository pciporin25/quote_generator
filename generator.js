var request = require('request');

var quoteId = Math.floor((Math.random()*4194)+1);
let quote = null;
let author = null;
var exports = module.exports = {};

var options = {
  url: `http://www.quotedb.com/quotes/${quoteId}`
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {

    var strung = body.toString();

    var start = strung.search("title")+6;
    var end = strung.search("</title");

    var extracted = strung.substring(start,end);
    var authIndex = extracted.search(". by ");

    quote = extracted.substring(0,authIndex+1);
    author = extracted.substring(authIndex+5);

    exports.quote = quote;
    exports.author = author;
  }
  else {
    console.error(error);
  }
}

exports.run = request(options,callback);
