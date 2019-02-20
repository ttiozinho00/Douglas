const http = require("http");

const PORT = 3000;

http
  .createServer((req, res) => {
    console.log(req);
    return res.end("Hello World");
  })
  .listen(PORT);
