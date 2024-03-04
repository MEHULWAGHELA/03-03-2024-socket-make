import { io } from "socket.io-client"

const socketFunction = io('ws://192.168.1.18:8000', {
    reconnection: true,
    methods: ['GET', 'POST'],
    transports: ['websocket', 'polling'],
})

socketFunction.on('connect', () => {
    console.log('Socket connected')
})
socketFunction.on('disconect', () => {
    console.log('Socket disconect')
})

export default socketFunction

// const socket = io(REACT_APP_SOCEKT_KEY, {
//   reconnection: true,
//   methods: ['GET', 'POST'],
//   transports: ['websocket', 'polling'],
// });
// socket.on('connect', () => {
//   console.log("Socket connected")
// })
// socket.on('disconnect', () => {
//   console.log("Socket disconnect")
// })