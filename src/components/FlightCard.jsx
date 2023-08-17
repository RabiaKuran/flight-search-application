import React from "react";
import "../styles/FlightCard.css";
function FlightCard({ flight }) {
  return (
    <div className="flightCardMain">
      <div className="flightCard">
        <div><p style={{ fontSize: "18px" }}>{flight.airline}</p></div>
        
        <div><p>Bagaj: {flight.luggage}</p></div>
      
        <p style={{ fontSize: "24px" }}>{flight.departureTime}</p>
        <div>
          <p>🛫</p>
          <p style={{ fontSize: "24px" }}>{flight.flightLength}</p>
        </div>

        <p style={{ fontSize: "24px" }}>{flight.arrivalTime}</p>

        <p className="flightPrice" style={{ color: "red", fontSize: "24px" }}>
          {flight.price} ₺
        </p>
      </div>
    </div>
  );
}

export default FlightCard;
