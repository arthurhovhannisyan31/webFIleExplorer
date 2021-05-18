const fs = require("fs");

const { prevPathRegExp } = require("../../constants");

const pathValidator = (input) =>
  fs.existsSync(input) ? "" : "Please check file path";

const isFile = (path) => fs.lstatSync(path).isFile();
const isDirectory = (path) => fs.lstatSync(path).isDirectory();
const getFolderList = (path) => fs.readdirSync(path);

const getSplitPath = (path) => {
  let newPath = path;
  if (newPath[0] === "/") {
    newPath = newPath.slice(1);
  }
  const idx = newPath.lastIndexOf("/");

  const lastPart = newPath.slice(idx + 1);
  const basePath = prevPathRegExp.exec(newPath)?.[0].slice(0, idx) ?? "/";
  return [basePath, lastPart];
};
const isRootFolder = (str) => str === "/";
const getPathOption = (path, label) => ({ path, label });
const getNormalizedUrlString = (str) => str.replaceAll('%20', ' ')

module.exports = {
  pathValidator,
  isFile,
  isDirectory,
  getFolderList,
  getSplitPath,
  isRootFolder,
  getPathOption,
  getNormalizedUrlString,
};
