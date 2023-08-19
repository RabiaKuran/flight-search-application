import React, { useEffect, useState } from "react";
import "../styles/FlightSearchForm.css";
import ADialog from "./dialog/ADialog";
import axios from "axios";

function FlightSearchForm({ onSearch }) {
  const [departureAirport, setDepartureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [oneWay, setOneWay] = useState(false);
  const [open, setOpen] = useState(false);
  const [airports, setAirports] = useState([]);

  useEffect(() => {
    fetchAirports();
  }, []);
  const fetchAirports = async () => {
    try {
      const response = await axios.get("http://localhost:8000/airports");
      if (response.data.length === 0) {
        console.warn("Havaalanı verileri boş geldi.");
      } else {
        setAirports(response.data);
      }
    } catch (error) {
      console.error("Havaalanı verileri çekilemedi:", error);
    }
  };
  const filterAirports = (input, airportList) => {
    return airportList.filter(
      (airport) =>
        airport.name.toLowerCase().indexOf(input.toLowerCase()) === 0
    );
  };

  const handleSearch = () => {
    if (
      !departureAirport ||
      !arrivalAirport ||
      !departureDate ||
      (!oneWay && !returnDate)
    ) {
      handleClickOpen();
    } else {
      const searchParams = {
        departureAirport,
        arrivalAirport,
        departureDate,
        returnDate,
        oneWay,
      };

      onSearch(searchParams);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div className="flight-search-form">
      <ADialog open={open} handleClose={handleClose} />
      <div className="flight-search">
        <div style={{ marginRight: "50px" }}>
          <h4 className="title">Nereden</h4>
          <input
            type="text"
            placeholder="Kalkış Havaalanı"
            value={departureAirport}
            onChange={(e) => setDepartureAirport(e.target.value)}
            list="departureAirport"
          />
           <datalist id="departureAirport">
            {filterAirports(departureAirport, airports).map((airport) => (
              <option key={airport.id} value={airport.name} />
            ))}
          </datalist>
          
        </div>
        <div>
          <h4 className="title">Nereye</h4>
          <input
            type="text"
            placeholder="Varış Havaalanı"
            value={arrivalAirport}
            onChange={(e) => setArrivalAirport(e.target.value)}
            list="arrivalAirport"
          />
          <datalist id="arrivalAirport">
            {filterAirports(arrivalAirport, airports).map((airport) => (
              <option key={airport.id} value={airport.name} />
            ))}
          </datalist>
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
              <h4 className="title">Dönüş Tarihi</h4>
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
        <div style={{ marginRight: "117px", marginTop: "10px" }}>
          <label>
            <input
              type="checkbox"
              checked={oneWay}
              onChange={() => setOneWay(!oneWay)}
            />
            Tek Yönlü Uçuş
          </label>
        </div>
        <div>
          <button onClick={handleSearch}>Arama Yap</button>
        </div>
      </div>
    </div>
  );
}

export default FlightSearchForm;
