import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [showNotification,setShowNotification] = useState(false);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
      simulateAppointmentBooking();
    }
  }, []);

  useEffect(() => {
    if (appointmentData) {
        setShowNotification(true);
    }
  }, [appointmentData]);

   // Function to simulate appointment booking
   const simulateAppointmentBooking = () => {
    // Simulating appointment booking success 
    setTimeout(() => {
      // Assuming a new appointment is booked
      const isNewAppointmentBooked = true; // Replace this with your actual logic

      if (isNewAppointmentBooked) {
      
        alert('Appointment booked successfully!'); 
      }
    }, 2000); // Simulating a delay of 2 seconds before triggering the notification
  };
  return (
    <div>
      <Navbar ></Navbar>
      {children}
      {isLoggedIn && appointmentData && showNotification && (
        <>
          <div className="appointment-card">
            <div className="appointment-card__content">
              <h3 className="appointment-card__title">Appointment Details</h3>
              <p className="appointment-card__message">
                <strong>User:</strong> {username}
                <strong>Doctor:</strong> {doctorData?.name}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Notification;