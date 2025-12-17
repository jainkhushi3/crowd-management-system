import { io } from "socket.io-client";

class SocketService {
  socket = null;

  connect() {
    const socketUrl = import.meta.env.VITE_SOCKET_URL;

    if (!socketUrl) {
      console.warn("Socket disabled (no backend available)");
      return;
    }

    if (this.socket) return;

    this.socket = io(socketUrl, {
      transports: ["websocket"],
    });

    this.socket.on("connect", () => {
      console.log("Socket connected");
    });

    this.socket.on("connect_error", () => {
      console.warn("Socket connection failed");
    });
  }

  onLiveOccupancy(cb) {
    if (!this.socket) return;
    this.socket.on("live_occupancy", cb);
  }

  onAlert(cb) {
    if (!this.socket) return;
    this.socket.on("alert", cb);
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }
}

export default new SocketService();
