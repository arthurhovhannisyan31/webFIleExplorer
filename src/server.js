const http = require("http");
const socketio = require("socket.io");
const { getNormalizedUrlString } = require("./utils/helpers");
const { resolvePath } = require("./utils/helpers/resolvePath");
const { PORT } = require("./constants");

const reqMethodHandlersMap = {
  GET: async (req, res) => {
    await resolvePath(getNormalizedUrlString(req.url), res);
  },
  default: () => {
    res.end();
  },
};

const server = http.createServer((req, res) => {
  const reqMethod = req.method.toUpperCase();
  const reqHandler =
    reqMethodHandlersMap[reqMethod] || reqMethodHandlersMap.default;
  reqHandler(req, res);
});

const io = socketio(server);

io.on("connection", (client) => {
  client.emit("message", io.engine.clientsCount);
  client.broadcast.emit("message", io.engine.clientsCount);

  client.on("message", (msg) => {
    client.broadcast.emit("message", msg);
  });

  client.on("disconnect", () => {
    client.broadcast.emit("message", io.engine.clientsCount);
  });
});

server.listen(PORT, () => {
  console.log(`Server started at port ${PORT}, current pid ${process.pid}`);
});
