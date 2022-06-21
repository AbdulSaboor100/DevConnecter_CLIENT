import React from "react";
import { useSelector } from "react-redux";

const Alert = () => {
  const { alert } = useSelector((alert) => alert);
  let [newAlert, setNewAlert] = React.useState([]);
  React.useEffect(() => {
    if (alert && alert !== {} && alert.length >= 0) {
      setNewAlert(alert);
    }
  }, [alert]);
  return (
    <>
      {newAlert.map((item, index) => (
        <div key={item.id} className={`alert alert-${item.alertType}`}>
          {item.message}
        </div>
      ))}
    </>
  );
};

export default Alert;
