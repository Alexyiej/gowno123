function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-start p-6">
      <div className="w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border-l-4 border-red-500 transform transition-all hover:shadow-xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-500 to-red-400 text-white px-6 py-4">
          <h2 className="text-xl font-bold">KPI Dashboard</h2>
          <p className="text-sm mt-1 opacity-80">Fleet utilization metrics</p>
        </div>

        {/* KPI List */}
        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-3">
            <span className="text-red-500 text-xl">📊</span>
            <p className="text-gray-700 font-medium">Fleet Utilization: % przejechanych km względem limitów rocznych</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-red-500 text-xl">🚛</span>
            <p className="text-gray-700 font-medium">Vehicle Maintenance: % completed on schedule</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-red-500 text-xl">⏱️</span>
            <p className="text-gray-700 font-medium">Average Delivery Time: comparison to SLA</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-red-500 text-xl">💰</span>
            <p className="text-gray-700 font-medium">Fuel Efficiency: % of target achieved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
