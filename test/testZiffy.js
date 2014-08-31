var path = require('path');
var fs = require('fs');
var ziffy = require(path.join('..','ziffy'));

var hello = ziffy.convert('Hello World');
console.log(hello);

if (process.argv[2]) {
  var fileStream = fs.createReadStream(process.argv[2]);
  ziffy.transform(fileStream).pipe(process.stdout);
}
