var colors = require('colors');
var through = require('through');

var ziffy = {
  transform: function(stream) {
    return stream.pipe(through(function (data) {
      this.queue(data.toString().zalgo.rainbow);
    }));
  },
  convert: function(string) {
    return string.zalgo.rainbow;
  }
};

module.exports = ziffy;
