import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './DoctorCardIC.css';
import AppointmentFormIC from '../AppointmentFormIC/AppointmentFormIC'
import { v4 as uuidv4 } from 'uuid';
// import defaultImage from "./defaultImage.jpg"
import Notification from '../../Notification/Notification';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



const DoctorCardIC = ({ name, speciality, experience, ratings, profilePic }) => {
  
  const [showModal, setShowModal] = useState(false);
  const [appointments, setAppointments] = useState([]);


  const handleBooking = () => {
    setShowModal(true);
  };

  const handleCancel = (appointmentId) => {
    const updatedAppointments = appointments.filter((appointment) => appointment.id !== appointmentId);
    setAppointments(updatedAppointments);
  };

  const handleFormSubmit = (appointmentData) => {
    const newAppointment = {
      id: uuidv4(),
      ...appointmentData,
    };
    const updatedAppointments = [...appointments, newAppointment];
    setAppointments(updatedAppointments);
    setShowModal(false);

    // Storing appointment data in localStorage
    const doctorName = name; 
    localStorage.setItem(doctorName, JSON.stringify(updatedAppointments));
  };

  
  
  return (
    
    <div className="doctor-card-container" >
      <div className="doctor-card-details-container">
        <div className="doctor-card-details">
         <div className="doctor-card-profile-image-container">
         {profilePic ? (
         <img src={profilePic} alt="Doctor Profile" className="doctor-profile-image" />
         
        ) : (
        <svg    
            xmlns="http://www.w3.org/2000/svg" 
            width="46" height="46" fill="currentColor" 
            className="bi bi-person-fill" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        </svg>
        // <img src={defaultImage} alt="Placeholder" className="doctor-profile-image-placeholder" />
        
        )}
          </div>
          <div className="doctor-card-detail-name">{name}</div>
          <div className="doctor-card-detail-speciality">{speciality}</div>
          <div className="doctor-card-detail-experience">{experience} years experience</div>
          <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
        </div>
        {/* for reference  */}
        {/* <div>
              <button className='book-appointment-btn'>                    
                <div>Book Appointment</div>
              <div>No Booking Fee</div>
            </button>
              </div> */}
      </div>


    <div className="doctor-card-options-container">
       <Popup
          style={{ backgroundColor: '#FFFFFF' }}
          trigger={
            <button className={`book-appointment-btn ${appointments.length > 0 ? 'cancel-appointment' : ''}`}>
              {appointments.length > 0 ? (
                <div>Cancel Appointment</div>
              ) : (
                <div>Book Appointment</div>
              )}
              <div>No Booking Fee</div>
            </button>
          }
          modal
          open={showModal}
          onClose={() => setShowModal(false)}
        >
          {(close) => (
            <div className="doctorbg" style={{ height: '80vh'}}>
              <div>
                <div className="doctor-card-profile-image-container">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16"> <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/> </svg> */}
                {/* <img src={defaultImage} alt="Placeholder" className="doctor-profile-image-placeholder" /> */}
                </div>
                <div className="doctor-card-details">
                  <div className="doctor-card-detail-name">{name}</div>
                  <div className="doctor-card-detail-speciality">{speciality}</div>
                  <div className="doctor-card-detail-experience">{experience} years experience</div>
                  <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
                </div>
              </div>

              {appointments.length > 0 ? (
                <>
                  <h3 style={{ textAlign: 'center' }}>Appointment Booked!</h3>
                 
                  {appointments.map((appointment) => (
                    <div className="bookedInfo" key={appointment.id}>
                     
                     
                      <Card style={{marginTop:"70px", marginLeft:"140px", width:"450px"}}>
                            <CardContent>
                            <Typography variant="h5" gutterBottom>Name: {appointment.name}</Typography>
                            <Typography variant="h5" gutterBottom>Phone Number: +{appointment.phoneNumber}</Typography>     
                            <Button onClick={() => handleCancel(appointment.id)} 
                            variant="contained" color="error" style={{width:"60%",marginLeft:"100px"}}>Cancel Appointment</Button>
                            </CardContent>
                       </Card>
                     
                    </div>
                  ))}
                </>
              ) : (
                <AppointmentFormIC doctorName={name} doctorSpeciality={speciality} onSubmit={handleFormSubmit} />
              )}
            </div>
          )}
        </Popup> 
      </div>
    </div>
  );
};

export default DoctorCardIC;
