import React from "react";

export default function Alerts() {
  const alerts = [
    {
      typ: "Leasing",
      opis: "Limit przebiegu przekroczony",
      pojazd: "LU77412",
      poziom: "Krytyczny",
    },
    {
      typ: "Serwis",
      opis: "Przegląd za 500 km",
      pojazd: "WX12345",
      poziom: "Uwaga",
    },
    {
      typ: "Leasing",
      opis: "Zbliża się koniec leasingu",
      pojazd: "GD91234",
      poziom: "Krytyczny",
    },
  ];

  // Filtrujemy tylko krytyczne alerty
  const krytyczneAlerts = alerts.filter((a) => a.poziom === "Krytyczny");

  if (krytyczneAlerts.length === 0) {
    return null; // nic nie renderujemy, jeśli brak krytycznych alertów
  }

  return (
    <div className="alerts-container">
      <div className="alerts-card">
        <div className="alerts-header">
          <h2>Alerty Krytyczne</h2>
          <p>Monitorowanie alertów floty</p>
        </div>

        <div className="alerts-list">
          {krytyczneAlerts.map((alert, index) => (
            <div key={index} className="alerts-item">
              <p>
                <strong>Pojazd:</strong> {alert.pojazd}
              </p>
              <p>
                <strong>Typ:</strong> {alert.typ}
              </p>
              <p>
                <strong>Opis:</strong> {alert.opis}
              </p>
              <p className="alerts-poziom">{alert.poziom}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
