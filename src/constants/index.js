const os = require('os')

const prevPathRegExp = /.+\//;
const CPU_LENGTH = os.cpus().length;
const PORT = 3000;

module.exports = {
  prevPathRegExp,
  CPU_LENGTH,
  PORT
}
