const fs = require("fs");

const checkAccessError = (path) =>
  new Promise((res) => {
    fs.access(path, fs.constants.R_OK, (err) => {
      res(err);
    });
  });

module.exports = {
  checkAccessError,
};
