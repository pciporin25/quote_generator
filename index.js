var generator = require('./generator');
var async = require('async');
var first = true;
let quote = generator.quote;
let author = generator.author;

console.log("\nWelcome to Quote Generator!");
generator.run;

function isReady(nullCheck) {
  if (nullCheck === null || typeof nullCheck == 'undefined') {
    return false;
  }
  else {
    return true;
  }
}

function logging(callback) {
  if (first) {
    console.log("\nLoading...please wait a moment while we generate your quote.");
    first = false;
  }
  author = generator.author
  quote = generator.quote;
  setTimeout(function(){ callback(author); }, 3000);
};

function ready(nullCheck) {
  console.log("\n\nYour quote has been generated!");
  console.log(`\nThis quote belongs to ${author}:`);
  console.log(`\n${quote}\n--${author}\n`);
}

async.until(isReady,logging,ready);
