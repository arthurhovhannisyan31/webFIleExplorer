const getPageTemplate = (children) => {
  return `
    <html lang='en'>
      <head>
        <title>Calculator</title>
        <link rel="shortcut icon" href="https://unsplash.com/photos/ZlllSguW5Ow" type="image/x-icon">
        <style>    
          form {
            margin: 0 auto;
          }  
          input {
            display: block;
          }
          ul {
            list-style-type: none;
          }
          li {
            font-size: 1.2rem;
          }
        </style>
      </head>
      <body>
        <div>
          ${children}
        </div>
      </body>    
    </html>
  `;
};

module.exports = {
  getPageTemplate
}
