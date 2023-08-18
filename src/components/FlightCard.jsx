import React, { useState } from "react";
import "../styles/FlightCard.css";
import ArrowRightOk from "./arrows/ArrowRight";
import Grid from "@mui/material/Grid";
import TurkHavaYollari from "../images/TurkHavaYollari.png";
import Pegasus from "../images/Pegasus.png";
import FlightDetailsCard from "./FlightDetailsCard";

function FlightCard({ flight }) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <Grid className="flightCardMain">
      
      <Grid container spacing={1} className="flightCard">
   
        <Grid item xs={0.4}>
          {flight.airline === "Türk Hava Yolları" ? (
            <img src={TurkHavaYollari} alt="Türk hava yolları"></img>
          ) : (
            <img src={Pegasus} alt="Pegasus"></img>
          )}
        </Grid>
        <Grid item xs={2}>
          <p style={{ fontSize: "18px" }}>{flight.airline}</p>
        </Grid>
        <Grid item xs={1.6}>
          <p>Bagaj: {flight.luggage}</p>
        </Grid>
        <Grid item xs={1}>
          <p style={{ fontSize: "32px" }}>{flight.departureTime}</p>
          <p style={{ fontSize: "32px" }}>{flight.departureAirportCode}</p>
        </Grid>
        <Grid item xs={2}>
          <p style={{ fontSize: "24px", textAlign: "center" }}>
            {flight.flightLength}
          </p>
          <ArrowRightOk />
          <p style={{ fontSize: "16px", textAlign: "center" }}>
            {flight.transfer}
          </p>
        </Grid>
        <Grid item xs={2} style={{marginLeft:"15px"}}>
          <p style={{ fontSize: "24px" }}>{flight.arrivalTime}</p>
          <p style={{ fontSize: "32px" }}>{flight.arrivalAirportCode}</p>
        </Grid>
        <Grid item xs={1}>
          <p className="flightPrice" style={{ color: "red", fontSize: "24px",fontWeight: "bold" }}>
            {flight.price} TL
          </p>
          
        </Grid>
        <Grid item xs={1}>
        <p style={{ color: "gray", fontSize: "12px",fontWeight: "bold",textDecoration: "underline"  }} onClick={handleDialogOpen}>
            Detaylı Bilgi
          </p>
        </Grid>
        {dialogOpen && (
        <FlightDetailsCard flight={flight} onClose={handleDialogClose} />
      )}
       
      </Grid>
    </Grid>
  );
}

export default FlightCard;
