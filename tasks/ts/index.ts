import * as fs from 'fs-jetpack';

import * as isGlob from 'is-glob';
import * as UglifyJS from 'uglify-js';
import * as baseGrob from 'glob';

// new baseGrob.Glob(`app/js/**/*.js`, (err, resultArray) => {
//   if (err) throw new Error(err);
//   resultArray.forEach((path) => {
//     const result = UglifyJS.minify(path, { compress: true, mangle: true });
//     fs.write(`dist/${path}`, result.code);
//   });
// });