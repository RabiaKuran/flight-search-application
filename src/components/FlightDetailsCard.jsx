import React, { useState } from "react";
import "../styles/FlightDetailsCard.css";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import Pegasus from "../images/Pegasus.png";
import TurkHavaYollari from "../images/TurkHavaYollari.png";

function FlightDetailsCard({ flight, onClose }) {

  return (
    <Grid className="flightDetailsDialog">
      <Grid container spacing={1} className="dialogHeader">
        <Grid item xs={11.6}>
          <h2>DETAYLI BİLGİ</h2>
          
        </Grid>
        <Grid item xs={0.4}>
        <CloseIcon className="closeIcon" onClick={onClose} />
        </Grid>

    
      </Grid>

      <Grid container spacing={1} className="dialogHeader">
        <Grid item xs={0.5}>
          {flight.airline === "Türk Hava Yolları" ? (
            <img src={TurkHavaYollari} alt="Türk hava yolları"></img>
          ) : (
            <img src={Pegasus} alt="Pegasus"></img>
          )}
        </Grid>
        <Grid item xs={1}>
          <p style={{ fontSize: "18px" }}>{flight.airline}</p>
        </Grid>

        <Grid item xs={3}>
          <p style={{ fontSize: "24px" }}>
            {flight.departureDate}/{flight.departureTime}
          </p>

          <p style={{ fontSize: "22px" }}>{flight.departureAirport}</p>
        </Grid>

        <Grid item xs={3}>
          <p style={{ fontSize: "24px" }}>
            {flight.returnDate}/{flight.arrivalTime}
          </p>

          <p style={{ fontSize: "22px" }}>{flight.arrivalAirport}</p>
        </Grid>
        <Grid item xs={1}>
          <p>Bagaj: {flight.luggage}</p>
        </Grid>
        <Grid item xs={1}>
          <p>Şehir: {flight.city}</p>
        </Grid>
        <Grid item xs={1}>
          <p>Transfer: {flight.transfer}</p>
        </Grid>
        
      </Grid>
      <div className="closeButton" onClick={onClose} style={{textAlign:"end", color:"red"}}>
          Kapat
        </div>
    </Grid>
  );
}

export default FlightDetailsCard;
