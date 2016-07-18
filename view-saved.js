var saved = require('./saved.json');
var colors = require('colors');

console.log("Your Quote Library:".bold);

for (var index in saved) {
  var element = saved[index];
  console.log(`\n${colors.magenta(element.quote)}\n--${colors.italic(element.author)}\n`)
};


//TO DO: ADD CATEGORIES (i.e. funny, politics, deep, etc.)
