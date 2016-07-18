var generator = require('./my_modules/generator');
var async = require('async');
var first = true;
let quote = generator.quote;
let author = generator.author;
var save = require('./my_modules/saveQuotes');
var colors = require('colors');

generator.run;
console.log("Welcome to Quote Generator!".bold);

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
    console.log("\nLoading...".cyan.italic + "\nPlease wait a moment while your quote is generated.".cyan);
    first = false;
  }
  author = generator.author
  quote = generator.quote;
  setTimeout(function(){ callback(author); }, 3000);
};

function ready(nullCheck) {
  console.log("\nYour quote has been generated!".yellow);
  console.log(`\n\nThis quote belongs to ${author}:`.underline);
  console.log(`\n${colors.magenta(quote)}\n--${colors.italic(author)}\n`);
  save.prompt(quote,author);
}

async.until(isReady,logging,ready);
