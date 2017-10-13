const fs = require('fs');
const path = require('path');
const UglifyJS = require('uglify-js');

const code = fs.readFileSync(path.resolve(__dirname, './input.js'));
// const result = UglifyJS.minify(code.toString(), {

const result = UglifyJS.minify(`"use strict";
const aaa = 23;`);

console.log(result)