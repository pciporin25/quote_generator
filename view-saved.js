var saved = require('./saved.json');

for (var index in saved) {
  var element = saved[index];
  console.log(`\n${element.quote}\n--${element.author}\n\n`)
};
