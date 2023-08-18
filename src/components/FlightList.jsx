import React, { useEffect, useState } from "react";
import FlightCard from "./FlightCard";
import ALoading from "../components/loading/ALoading";

function FlightList({ flights }) {
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("departureTime");
  // Başlangıçta kalkış saatine göre sırala

  useEffect(() => {
    if (flights.length >= 0) {
      setLoading(false);
    }
  }, [flights]);
  const convertFlightLengthToMinutes = (flightLength) => {
    const timeParts = flightLength.split(" ");
    let totalMinutes = 0;
  
    for (const timePart of timeParts) {
      if (timePart.includes("s")) {
        totalMinutes += parseInt(timePart) * 60;
      } else if (timePart.includes("dk")) {
        totalMinutes += parseInt(timePart);
      }
    }
  
    return totalMinutes;
  };
  const sortFlights = () => {
    const sortedFlights = [...flights];

    switch (sortBy) {
      case "departureTime":
        sortedFlights.sort((a, b) =>
          a.departureTime.localeCompare(b.departureTime)
        );
        break;
      case "arrivalTime":
        sortedFlights.sort((a, b) =>
          a.arrivalTime.localeCompare(b.arrivalTime)
        );
        break;
      case "flightLength":
        sortedFlights.sort((a, b) =>
        convertFlightLengthToMinutes(a.flightLength) -
        convertFlightLengthToMinutes(b.flightLength)
      );
        break;
      case "price":
        sortedFlights.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }

    return sortedFlights;
  };

  return (
    <div>
      {loading ? (
        <ALoading />
      ) : (
        <>
          
          <div>
          <h4>Uçuş Listesi</h4>
            <label htmlFor="sort">Sırala:</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="departureTime">Kalkış Saati</option>
              <option value="arrivalTime">Varış Saati</option>
              <option value="flightLength">Uçuş Uzunluğu</option>
              <option value="price">Fiyat</option>
            </select>
          </div>



          {flights?.length === 0 ? (
            <p style={{ color: "red", textAlign: "center", fontSize: "24px" }}>
              Uygun uçuş bulunamadı.
            </p>
          ) : (
            sortFlights().map((flight) => (
              <FlightCard key={flight.id} flight={flight} />
            ))
          )}
        </>
      )}
    </div>
  );
}

export default FlightList;
