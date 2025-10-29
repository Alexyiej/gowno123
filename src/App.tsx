import { Routes, Route } from "react-router-dom"

import Kpi from "./components/Kpi/Kpi"
import Alerts from "./components/Alerts/Alerts"
import TruckTracker from "./components/TruckTracker/TruckTracker"

function App() {
  return (
    <Routes>
      <Route path="/kpi" element={<Kpi />} />
      <Route path="/alerts" element={<Alerts />} />
      <Route path="/trucktracker" element={<TruckTracker />} />
    </Routes>
  )
}

export default App
