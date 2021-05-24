const getMainTemplate = (children) => {
  return `
    <html lang='en'>
      <head>
        <meta charset="UTF-8">
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
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
        <script src="https://cdn.socket.io/4.1.1/socket.io.min.js" integrity="sha384-cdrFIqe3RasCMNE0jeFG9xJHog/tgOVC1E9Lzve8LQN1g5WUHo0Kvk1mawWjxX7a" crossorigin="anonymous"></script>
      </head>
      <body>
        <div id='root'>
          <div>
            Users online <span id='connections'></span>
          </div>
          ${children}
        </div>
        <script>
          const socket = io('http://localhost:3000');
          const connectionsContainer = document.querySelector('#connections')
          
          const updateCount = (msg) => {
            connectionsContainer.innerText = msg
          } 
          socket.on("connect", () => {
            connectionsContainer.innerText = 1;
          });
          socket.on('message', (msg) => {
            updateCount(msg)
          })
        </script>
      </body>    
    </html>
  `;
};

module.exports = {
  getMainTemplate,
};
