import React, { useState } from "react";
import "../styles/FlightSearchForm.css";
function FlightSearchForm() {
  const [departureAirport, setDepartureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [oneWay, setOneWay] = useState(false);

  return (
    <div className="flight-search-form">
      <div className="flight-search">
        <div style={{ marginRight: "50px" }}>
          <h4 className="title">Nereden</h4>
          <input
            type="text"
            placeholder="Kalkış Havaalanı"
            value={departureAirport}
            onChange={(e) => setDepartureAirport(e.target.value)}
          />
        </div>
        <div>
          <h4 className="title">Nereye</h4>
          <input
            type="text"
            placeholder="Varış Havaalanı"
            value={arrivalAirport}
            onChange={(e) => setArrivalAirport(e.target.value)}
          />
        </div>
      </div>
      <div className="flight-search">
        <div style={{ marginRight: "112px" }}>
          <h4 className="title">Gidiş Tarihi</h4>
          <input
            type="date"
            placeholder="Kalkış Tarihi"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>
        <div>
          {!oneWay && (
            <>
              <h4 className="title">DönüşTarihi</h4>
              <input
                type="date"
                placeholder="Varış Tarihi"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
            </>
          )}
        </div>
      </div>
      <div className="flight-search">
        <div style={{ marginRight: "117px",marginTop:"10px" }}>
          <label>
            <input
              type="checkbox"
              checked={oneWay}
              onChange={() => setOneWay(!oneWay)}
            />
            Tek Yönlü Uçuş
          </label>
          
        </div>
        <div><button>Arama Yap</button></div>
      </div>
    </div>
  );
}

export default FlightSearchForm;
