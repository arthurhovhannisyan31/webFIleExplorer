const { prevPathRegExp } = require('../../constants')

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

module.exports = {
  getSplitPath
}
