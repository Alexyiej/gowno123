import React from "react";

const KpiCard = ({ title, subtitle, kpis, borderColor }) => {
  return (
    <div className={`w-80 bg-white rounded-3xl shadow-2xl overflow-hidden border-l-8 ${borderColor}`}>
      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-5">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-sm mt-1 opacity-80">{subtitle}</p>
      </div>

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
  );
};

export default KpiCard;
