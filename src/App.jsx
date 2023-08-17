import './App.css';
import ContactUs from './components/ContactUs';
import FlightSearch from './components/FlightSearch';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<FlightSearch/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
      </Routes>
      
     
      
    </>
  );
}

export default App;
