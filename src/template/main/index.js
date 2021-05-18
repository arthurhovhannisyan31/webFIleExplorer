const { getOptionsListTemplate } = require('../nav')
const { getFolderElements } = require('../../utils/helpers/folderReader')
const { getErrorTemplate } = require('../../template/error')
const { getPageTemplate } = require("../../template/page");

const getMainTemplate = (url, res) => {
  const { paths, error } = getFolderElements(url);
  res.end(
    getPageTemplate(`
      <div>
        <h1>File explorer</h1>
        <p>Please use the list below to navigate to file or folder, or type your target location in url.</p>
        ${getErrorTemplate(error)} 
        ${getOptionsListTemplate(paths)}
      </div>
    `)
  );
};

module.exports = {
  getMainTemplate,
};
