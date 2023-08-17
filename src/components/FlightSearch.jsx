import React, { useState,useEffect } from "react";
import FlightSearchForm from "./FlightSearchForm";
import FlightList from "./FlightList";
import axios from "axios";
function FlightSearch() {

  const [flights, setFlights] = useState([]);

  const fetchFlights = async ()=>{
    const response = await axios.get('http://localhost:8000/flights');
    setFlights(response.data)
  }
  useEffect(()=>{
    fetchFlights();
    

  },[])

  return (
    <div style={{ marginLeft: "24px"}}>
      <h2 style={{ color: "#03befc"}}>Uçuş Arama Uygulaması</h2>
      <FlightSearchForm />
      <FlightList flights={flights} />
    </div>
  );
}

export default FlightSearch;
