import React from "react";


export default function TruckTracker() {
  const tiry = [
    {
      id: 1,
      nr: "WX12345",
      marka: "Volvo FH16",
      przebieg: 184200,
      lokalizacja: "Warszawa Hub",
      limit: 250000,
      leasing_koniec: "2026-03-01",
      stan: "OK",
    },
    {
      id: 2,
      nr: "GD91234",
      marka: "Scania R450",
      przebieg: 243900,
      lokalizacja: "Gdańsk",
      limit: 250000,
      leasing_koniec: "2025-12-15",
      stan: "Blisko limitu",
    },
    {
      id: 3,
      nr: "LU77412",
      marka: "Mercedes Actros",
      przebieg: 278600,
      lokalizacja: "Lublin",
      limit: 280000,
      leasing_koniec: "2025-11-01",
      stan: "Limit przekroczony",
    },
  ];

  const getStanClass = (stan: string) => {
    if (stan === "OK") return "stan-ok";
    if (stan === "Blisko limitu") return "stan-warning";
    return "stan-danger";
  };

  return (
    <div className="bg-[#ffe3e0] rounded-3xl h-75">
      <div>
        {/* Header */}
        <div>
          <h2 className="text-4xl font-bold p-3">Truck Tracker</h2>
        </div>
        <div className="ml-3">
          <button className="bg-[#fafafa] w-30 h-10 rounded-xl border hover:font-bold">ID 123456</button>
        </div>

        {/* Lista tirów */}
        <div className="flex flex-col">
          {tiry.map((tir) => (
            <div key={tir.id}>
              <h3>🚛 {tir.marka}</h3>
              <p>Nr rejestracyjny: {tir.nr}</p>

              <div className="tir-details">
                <p>
                  <strong>Lokalizacja:</strong> {tir.lokalizacja}
                </p>
                <p>
                  <strong>Przebieg:</strong> {tir.przebieg.toLocaleString()} km
                  / {tir.limit.toLocaleString()} km
                </p>
                <p>
                  <strong>Koniec leasingu:</strong> {tir.leasing_koniec}
                </p>
                <p>
                  <strong>Stan:</strong>{" "}
                  <span className={getStanClass(tir.stan)}>{tir.stan}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
