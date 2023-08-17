import React, { useState, useEffect } from "react";
import FlightSearchForm from "./FlightSearchForm";
import FlightList from "./FlightList";
import axios from "axios";
function FlightSearch() {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);

  const handleSearch = (searchParams) => {
    const { departureAirport, arrivalAirport } = searchParams;

    const filteredFlights = flights.filter((flight) => {
      return (
        flight.departureAirport
          .toLowerCase()
          .includes(departureAirport.toLowerCase()) &&
        flight.arrivalAirport
          .toLowerCase()
          .includes(arrivalAirport.toLowerCase())
      );
    });

    setFilteredFlights(filteredFlights);
    console.log(filteredFlights);
  };

  const fetchFlights = async () => {
    const response = await axios.get("http://localhost:8000/flights");
    setFlights(response.data);
    console.log(filteredFlights);
    console.log(flights);
  };
  useEffect(() => {
    fetchFlights();
  }, []);

  return (
    <div style={{ marginLeft: "24px" }}>
      <h2 style={{ color: "#03befc" }}>Uçuş Arama Uygulaması</h2>
      <FlightSearchForm onSearch={handleSearch} />
      <FlightList flights={filteredFlights}/>
    </div>
  );
}

export default FlightSearch;
