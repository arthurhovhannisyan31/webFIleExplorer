const { isRootFolder } = require('../helpers')
const { getPathOption } = require('../helpers')
const { getFolderList } = require('../helpers')
const { pathValidator } = require('../helpers')
const { getSplitPath } = require('../helpers')

const getFolderElements = (path) => {
  const paths = [];
  const [base, current] = getSplitPath(path);

  const error = pathValidator(path);
  if (error) {
    return {
      paths: getFolderList("/").map((folderOption) =>
        getPathOption(`/${folderOption}`, folderOption)
      ),
      error,
    };
  }

  if (!isRootFolder(path)) {
    paths.push(
      getPathOption(
        `/${isRootFolder(base) ? "" : base}`,
        `.. ${getSplitPath(base)[1] || "/"}`
      )
    );
  }
  const folderOptions = getFolderList(path).map((folderItem) =>
    getPathOption(`${path}${current ? "/" : ""}${folderItem}`, folderItem)
  );

  return {
    paths: [...paths, ...folderOptions],
  };
};

module.exports = {
  getFolderElements
}
