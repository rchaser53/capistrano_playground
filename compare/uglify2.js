const path = require('path');
const UglifyJS = require('uglify-js');

const result = UglifyJS.minify(path.resolve(__dirname, './input.js'));

console.log(result)