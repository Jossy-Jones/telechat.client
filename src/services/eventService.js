import { io } from "socket.io-client";
import store from "../store";

const token = store.getters["auth/getAuth"]

const socket = io(import.meta.env.VITE_SOCKET_GATEWAY, {
    extraHeaders: {
        Authorization: `Bearer ${token}`
    }
});

socket.on("connect", ()=>{
    console.log(socket.id);
})


export default socket;