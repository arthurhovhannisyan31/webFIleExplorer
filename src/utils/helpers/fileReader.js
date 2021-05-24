const fs = require("fs");
const mime = require('mime-types')

const fileReader = (path, res) => {
  res.writeHead(200, { "Content-Type": mime.lookup(path) });
  const rs = fs.createReadStream(path)
  rs.pipe(res)
};

module.exports = {
  fileReader,
};
