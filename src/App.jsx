import "./App.css";
import Alerts from "./components/Alerts/Alerts.js";
import TruckTracker from "./components/TruckTracker/TruckTracker.jsx";
import Kpi from "./components/KPI/kpi.jsx";
function App() {
  return (
    <>
      <Alerts />
      <Kpi />
      <TruckTracker />
    </>
  );
}

export default App;
