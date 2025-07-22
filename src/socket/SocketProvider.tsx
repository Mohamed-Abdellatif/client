import { createContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { getApiBaseUrl } from "../config/apiBaseUrl.browser";

const SocketContext = createContext<Socket | null>(null);

const SOCKET_URL = getApiBaseUrl();

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socket = io(SOCKET_URL, { autoConnect: true });
    setSocket(socket);
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
