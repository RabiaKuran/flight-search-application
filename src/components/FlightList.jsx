import React from 'react'
import FlightCard from './FlightCard';

function FlightList({flights}) {
  if (flights.length === 0) {
    return <div>Uçuş bulunamadı.</div>;
  }
  return (
    <div>
      <h4>Uçuş Listesi</h4>
      
      {flights.map((flight) => (
        <FlightCard key={flight.id} flight={flight} />
        
      ))}
    </div>
  )
}

export default FlightList
