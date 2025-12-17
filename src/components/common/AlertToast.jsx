import useAlerts from "../../context/useAlerts";
import "./alert.css";

const AlertToast = () => {
  const { alerts, removeAlert } = useAlerts();

  return (
    <div className="alert-container">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`alert-card ${alert.severity.toLowerCase()}`}
          onClick={() => removeAlert(alert.id)}
        >
          <strong>{alert.type.toUpperCase()}</strong> in {alert.zone}
          <p>{alert.site}</p>
        </div>
      ))}
    </div>
  );
};

export default AlertToast;
