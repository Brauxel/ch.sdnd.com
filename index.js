require('babel-register');
const hook = require('css-modules-require-hook');
const sass = require('node-sass');
hook({
  extensions: [ '.scss', '.css' ],
  generateScopedName: '[name]_[local]__[hash:base64:5]',
  preprocessCss: ( data, filename ) => sass.renderSync({
        data,
        file: filename,
      }).css
});
require('./src/server');
