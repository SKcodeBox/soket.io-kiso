console.log("node.js 起動");

const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
const PORT = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    console.log("ユーザーが接続しました");

    socket.on("chat message", (msg) => {
      //  メッセージを受信
      io.emit("chat message", msg);
      // 全員に送信
    });
});

server.listen(PORT, () => {
    console.log("ポート番号 3000");
});
