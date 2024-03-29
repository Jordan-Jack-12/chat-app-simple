import {io} from 'socket.io-client';

const backendUrl = "https://871e-117-207-9-141.ngrok-free.app/";

// if (process.env.REACT_APP_ENVIROMENT == prod) {
//   backendUrl = process.env.REACT_APP_SERVER_URL_PUBLIC;
// } else {
//   backendUrl = process.env.REACT_APP_SERVER_URL_LOCAL;
// }

export const socket = io(backendUrl, {
  autoConnect: false
})
