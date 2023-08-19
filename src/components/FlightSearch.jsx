import React, { useState, useEffect } from "react";
import FlightSearchForm from "./FlightSearchForm";
import FlightList from "./FlightList";
import axios from "axios";
function FlightSearch() {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [list, setList] = useState(false);
  const handleSearch = (searchParams) => {
    setList(true);
    const { departureAirport, arrivalAirport, departureDate, returnDate } =
      searchParams;
    const filteredFlights = flights.filter((flight) => {
      return (
        flight.departureAirport
          .toLowerCase()
          .includes(departureAirport.toLowerCase()) &&
        flight.arrivalAirport
          .toLowerCase()
          .includes(arrivalAirport.toLowerCase()) &&
        flight.departureDate.toLowerCase().includes(departureDate) &&
        flight.returnDate.toLowerCase().includes(returnDate)
      );
    });

    setFilteredFlights(filteredFlights);
  };

  const fetchFlights = async () => {
    try {
      const response = await axios.get("http://localhost:8000/flights");
      if (response.data.length === 0) {
        console.warn("Uçuş verileri boş geldi.");
      } else {
        setFlights(response.data);
      }
    } catch (error) {
      console.error("Uçuş verileri çekilemedi:", error);
    
    }
  };
  useEffect(() => {
    fetchFlights();
  }, []);

  return (
    <div style={{ marginLeft: "24px" }}>
      <h2 style={{ color: "#03befc" }}>Uçuş Arama Uygulaması</h2>
      <FlightSearchForm onSearch={handleSearch} />
      {list ? <FlightList flights={filteredFlights} /> : <></>}
    </div>
  );
}

export default FlightSearch;
