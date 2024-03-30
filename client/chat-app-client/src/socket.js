import {io} from 'socket.io-client';
import { ENVIRONMENT, PUBLIC_SERVER_URL, LOCAL_SERVER_URL } from './config';

const backendUrl = ENVIRONMENT === "prod" ? PUBLIC_SERVER_URL : LOCAL_SERVER_URL;

export const socket = io(backendUrl, {
  autoConnect: false
})
