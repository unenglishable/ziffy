#!/usr/bin/env node
var path = require('path');
var ziffy = require(path.join(__dirname, 'ziffy'));

console.log(ziffy.convert(process.argv[2]));
