const http = require("http");
const cluster = require("cluster");

const { getNormalizedUrlString } = require('./utils/helpers')
const { resolvePath } = require('./utils/helpers/resolvePath')
const { CPU_LENGTH, PORT } = require("./constants");

if (cluster.isMaster) {
  for (let n = 0; n < CPU_LENGTH; n++) {
    cluster.fork();
  }
} else {
  const reqMethodHandlersMap = {
    GET: (req, res) => {
      resolvePath(getNormalizedUrlString(req.url), res);
    },
    default: () => {
      res.end()
    },
  };

  const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    const reqMethod = req.method.toUpperCase();
    const reqHandler =
      reqMethodHandlersMap[reqMethod] || reqMethodHandlersMap.default;
    reqHandler(req, res);
  });

  server.listen(PORT, () => {
    console.log(`Server started at port ${PORT}, current pid ${process.pid}`);
  });
}
