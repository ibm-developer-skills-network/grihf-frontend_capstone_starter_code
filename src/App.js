import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import BookingConsultation from './Components/BookingConsultation';
import Home from './Components/Home/Home';
import AppointmentForm from './Components/AppointmentForm/AppointmentForm';
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import ProfilCard from './Components/ProfileCard/ProfileCard';

function App() {
    
  return (
    <div className="App">
    <BrowserRouter>
    <Notification>
      <Navbar/>
          <Routes>
          <Route path="/" element={<Landing_Page/>}/>
          <Route path="/signup" element={<Sign_Up/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/services" element={<Home/>}/>
          <Route path="/user-profil" element={<ProfilCard/>}/>
          <Route path="/instant-consultation" element={<InstantConsultation/>}/>
          <Route path="/booking-consultation" element={<BookingConsultation/>}/> 
          {/* <Route path="/appointment-form" element={<AppointmentForm/>}/> */}
          <Route path="/reviews" element={<ReviewForm/>}/>
          </Routes>
    </Notification>  
    </BrowserRouter>
   
</div>
  );
}


export default App;
