import { useEffect } from "react";
import socketService from "../services/socket.service";

const useSocket = (onOccupancyUpdate) => {
  useEffect(() => {
    if (!import.meta.env.VITE_SOCKET_URL) return;

    socketService.connect();
    socketService.onLiveOccupancy(onOccupancyUpdate);

    return () => {
      socketService.disconnect();
    };
  }, []);
};

export default useSocket;
