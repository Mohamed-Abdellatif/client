import { useContext } from "react";
import { createContext } from "react";
import { Socket } from "socket.io-client";

const SocketContext = createContext<Socket | null>(null);
export const useSocket = () => useContext(SocketContext);
