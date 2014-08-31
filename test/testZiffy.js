var path = require('path');
var fs = require('fs');
var ziffy = require(path.join('..','ziffy'));

var hello = ziffy.convert('ziffy');
console.log(hello);

if (process.argv[2]) {
  var fileStream = fs.createReadStream(process.argv[2]);
  var writeStream = process.stdout;
  if (process.argv[3]) {
    writeStream = fs.createWriteStream(process.argv[3]);
  }
  ziffy.transform(fileStream).pipe(writeStream);
}
