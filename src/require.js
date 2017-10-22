const { sanitize } = require('./util.js');

function _require(npmPackage) {
  return require(npmPackage);
}

module.exports = _require;
