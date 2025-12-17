import { useState } from "react";
import AlertContext from "./AlertContext";

const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  const addAlert = (alert) => {
    setAlerts((prev) => [alert, ...prev.slice(0, 4)]);
  };

  const removeAlert = (id) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <AlertContext.Provider value={{ alerts, addAlert, removeAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
