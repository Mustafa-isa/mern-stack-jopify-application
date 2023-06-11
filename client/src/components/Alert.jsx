import { useAppContext } from "../context/AppContext";
import "../../src/index.css";

const Alert = () => {
  const appApi = useAppContext();
  return (
    <div className={appApi.state.alertType.trim() }>
      {appApi.state.alertStatment}
    </div>
  );
};

export default Alert;
