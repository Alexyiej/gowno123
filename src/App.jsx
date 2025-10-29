function App() {
  const kpis = [
    { label: "Fleet Utilization", value: 75, color: "bg-red-500" },
    { label: "Vehicle Maintenance", value: 60, color: "bg-yellow-500" },
    { label: "Average Delivery Time", value: 90, color: "bg-green-500" },
    { label: "Fuel Efficiency", value: 50, color: "bg-blue-500" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-start p-6">
      {/* KPI Card */}
      <div className="w-80 bg-white rounded-3xl shadow-2xl overflow-hidden border-l-8 border-red-500">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-5">
          <h2 className="text-2xl font-bold">KPI Dashboard</h2>
          <p className="text-sm mt-1 opacity-80">Fleet Metrics Overview</p>
        </div>

        {/* KPI Items */}
        <div className="p-6 space-y-5">
          {kpis.map((kpi) => (
            <div key={kpi.label}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-medium">{kpi.label}</span>
                <span className="text-gray-900 font-bold">{kpi.value}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`${kpi.color} h-3 rounded-full`}
                  style={{ width: `${kpi.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
