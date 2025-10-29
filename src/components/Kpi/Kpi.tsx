import React from "react";

const Kpi = () => {
  const data = {
    title: "Wskaźniki firmy",
    subtitle: "Dane za październik 2025",
    kpis: [
      { label: "Sprzedaż miesięczna", value: 78, color: "bg-blue-500" },
      { label: "Nowi klienci", value: 64, color: "bg-green-500" },
      { label: "Retencja użytkowników", value: 89, color: "bg-emerald-500" },
      { label: "Wydajność zespołu", value: 72, color: "bg-yellow-500" },
      { label: "Realizacja celu kwartalnego", value: 55, color: "bg-red-500" },
    ],
  };

  return (
    <div
      className={`w-80 bg-white rounded-3xl shadow-2xl overflow-hidden ml-5`}
    >
      <div className="bg-gradient-to-r from-[#FF0000] to-[#BD0303] text-white px-6 py-5">
        <h2 className="text-2xl font-bold">{data.title}</h2>
        <p className="text-sm mt-1 opacity-80">{data.subtitle}</p>
      </div>

      <div className="p-6 space-y-5">
        {data.kpis.map((kpi) => (
          <div key={kpi.label}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700 font-medium">{kpi.label}</span>
              <span className="text-gray-900 font-bold">{kpi.value}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kpi;
