var fs = require('fs');
var existing = require('../saved.json');
var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var exports = module.exports = {};

exports.prompt = function(quote,author) {
  rl.question("Would you like to save this quote?  If so, enter 'yes' and press return.  Otherwise, enter 'no'.\n", (answer) => {
    if (answer==='yes') {
      exports.response = true;
      storeQuote(quote,author);
    }
    else {
      exports.response = false;
      console.log(existing);
    }
    rl.close();
  });
}

function storeQuote(quote,author) {
  var newQuote = {"quote": quote, "author": author};
  existing.push(newQuote);
  fs.writeFile('saved.json',JSON.stringify(existing), (err) => {
    if (err) {
      console.error(err);
    }
    else {
      console.log("\nSuccess! Your quote has been saved.\n");
    }
  });
};
