const { getOptionsListTemplate } = require('../nav')
const { getFolderElements } = require('../../utils/helpers/folderReader')
const { getErrorTemplate } = require('../../template/error')
const { getMainTemplate } = require("../../template/main");

const getContentTemplate = async (url, res) => {
  const { paths, error } = await getFolderElements(url);
  res.setHeader("Content-Type", "text/html");
  res.end(
    getMainTemplate(`
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
  getContentTemplate,
};
