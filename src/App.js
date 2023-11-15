import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
          <Routes>
          <Route path="/" element={<Landing_Page/>}/>
          <Route path="/signup" element={<Sign_Up/>}/>
          <Route path="/login" element={<Login/>}/>
          </Routes>
        
    </BrowserRouter>
   
</div>
  );
}

export default App;
