const express = require("express");
const path = require("path");
const fs = require("fs");
const ReactDOMServer = require("react-dom/server");
const React = require("react");

// Babel을 사용하여 JSX 문법을 사용해야함
console.log(
  ReactDOMServer.renderToString(React.createElement("div", null, "Aredra"))
);

const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/test", (req, res) => {
  const ssrText = ReactDOMServer.renderToString(
    React.createElement("div", null, "Aredra")
  );

  const indexHtml = fs
    .readFileSync(path.join(__dirname, "build", "index.html"))
    .toString()
    .replace('<div id="root"></div>', `<div id="root">${ssrText}</div>`);

  console.log(indexHtml);

  res.send(indexHtml);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(9000);
