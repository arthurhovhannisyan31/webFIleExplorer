const fs = require("fs");
const mime = require('mime-types')

const fileReader = (path, res) => {
  const rs = fs.createReadStream(path)
  res.writeHead(200, {'Content-Type': mime.lookup(path)})
  rs.pipe(res)
};

module.exports = {
  fileReader,
};
