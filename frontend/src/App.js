// import { io } from 'socket.io-client';
import './App.css';
import { Fragment } from 'react';
import socketFunction from './socketFunction';
// const REACT_APP_SOCEKT_KEY = process.env.REACT_APP_SOCEKT_KEY;
function App() {
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

  return (
    <Fragment>
      <h1>Hello From frontend</h1>
    </Fragment>
  );
}

export default App;
