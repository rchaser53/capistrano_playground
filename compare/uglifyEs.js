const UglifyJS = require("uglify-es");
const code = "const nyan = [234]; nyan.push(123);  ";
const result = UglifyJS.minify(code);

console.log(result);