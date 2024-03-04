require('dotenv').config();
require('./config/db')
const express = require('express');
const app = express();
const http = require('http').Server(app);
const PORT = process.env.PORT;
const path = require('path');
const { getUser, addUser, deleteUser, updateUser } = require('./controller/user');

const io = require('socket.io')(http);

app.use(express.json())

io.on('connection', (socket) => {
    console.log('User Connected')

    socket.on('disconnect', () => {
        console.log('User Disconnected')
    })

    socket.on('get|user', async (req) => {
        const result = await getUser(req)
        socket.emit('get|user', result)
    })
    socket.on('add|user', async (req) => {
        const result = await addUser(req)
        socket.emit('add|user', result)
    })
    socket.on('delete|user', async (req) => {
        const result = await deleteUser(req)
        socket.emit('delete|user', result)
    })
    socket.on('update|user', async (req) => {
        const result = await updateUser(req)
        socket.emit('update|user', result)
    })
})

app.get("/", (req, res) => {
    let options = {
        root: path.join(__dirname)
    }
    let fileName = 'index.html'
    res.sendFile(fileName, options)
})

http.listen(PORT, (() => {
    console.log("Listen On Port " + PORT)
}))