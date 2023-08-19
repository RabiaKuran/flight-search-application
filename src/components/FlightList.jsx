import React, { useEffect, useState } from "react";
import FlightCard from "./FlightCard";
import ALoading from "../components/loading/ALoading";
import Grid from "@mui/material/Grid";
function FlightList({ flights }) {
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("departureTime");
  // Başlangıçta kalkış saatine göre sıralayacak

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
        const minutesPart = parseInt(timePart);
        totalMinutes += isNaN(minutesPart) ? 0 : minutesPart;
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
        sortedFlights.sort((a, b) => {
          const aDuration = convertFlightLengthToMinutes(a.flightLength);
          const bDuration = convertFlightLengthToMinutes(b.flightLength);
          return aDuration - bDuration;
        });
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
          
          <Grid container spacing={1}>
            <Grid item xs={1}>
            <h4 style={{color:"GrayText"}}>Uçuş Listesi</h4>
            </Grid>
            <Grid item xs={1}>
            <h4 htmlFor="sort" style={{color:"gray"}}>Sıralama Seç:</h4>
              
            </Grid>
            <Grid item xs={2}>
            <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{ padding: "8px", marginTop:"12px" }}
              >
                <option value="departureTime">Kalkış Saati</option>
                <option value="arrivalTime">Varış Saati</option>
                <option value="flightLength">Uçuş Uzunluğu</option>
                <option value="price">Fiyat</option>
              </select>
            </Grid>
          
          </Grid>
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
