import {io} from 'socket.io-client';
import { ENVIRONMENT, PUBLIC_SERVER_URL, LOCAL_SERVER_URL } from './config';

const backendUrl = PUBLIC_SERVER_URL;

// if (process.env.REACT_APP_ENVIROMENT == prod) {
//   backendUrl = process.env.REACT_APP_SERVER_URL_PUBLIC;
// } else {
//   backendUrl = process.env.REACT_APP_SERVER_URL_LOCAL;
// }

export const socket = io(backendUrl, {
  autoConnect: false
})
