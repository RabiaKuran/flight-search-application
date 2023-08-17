import React from "react";
import FlightCard from "./FlightCard";

function FlightList({ flights }) {
  return (
    <div>
      {flights.length === 0 ? (
        <p>Uygun veri bulunamadı.</p>
      ) : (
        <>
          <h4>Uçuş Listesi</h4>
          {flights?.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </>
      )}
    </div>
  );
}

export default FlightList;
