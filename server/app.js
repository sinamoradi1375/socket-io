const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const port  = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIO(server, { cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] }});

const getAPIAndEmit = socket => {
    const response = new Date();

    socket.emit("FromAPI", response);
};

let interval;

io.on('connection', (socket) => {
    console.log('New client connected');
    if (interval) {
        clearInterval(interval);
    }

    interval = setInterval(() => {
        getAPIAndEmit(socket);
    }, 1000);
    socket.on("disconnect", () => {
        console.log("Client disconnected");
        clearInterval(interval);
    })
});

server.listen(port, () => console.log(`Listening on port ${port}`));