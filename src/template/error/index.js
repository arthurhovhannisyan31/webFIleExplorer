const getErrorTemplate = (error) => {
  return `
    <p style='color: red; display: ${
      error ? "block" : "none"
    }'>
      ${error}
    </p> 
  `;
};

module.exports = {
  getErrorTemplate
}
