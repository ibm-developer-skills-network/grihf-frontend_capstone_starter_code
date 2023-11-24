import { useEffect, useState } from "react"
import "./DoctorCard.css"
import { Link, useSearchParams } from "react-router-dom";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import { v4 as uuidv4 } from 'uuid';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useEffect, useState } from "react"
import "./DoctorCard.css"
import { Link, useSearchParams } from "react-router-dom";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import { v4 as uuidv4 } from 'uuid';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



function DoctorCard (){

    const [doctors, setDoctors] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const [searchParams] = useSearchParams();
    const [filteredDoctors, setFilteredDoctors] = useState(false);
    const [isSearched, setIsSearched] = useState(false);
    
    const [showAppointmentForm, setShowAppointmentForm] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        if (query) {
            const filtered = storedDoctorData.filter(
                (doctor) => doctor.speciality.toLowerCase().includes(query)
            );
            setFilteredDoctors(filtered);
            setIsSearched(true);
        } else {
            setIsSearched(false);
        }
    };
    const handleShowAppointmentForm = () => {
      setShowAppointmentForm(true);
    };
    
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    if (!storedDoctorData || !Array.isArray(storedDoctorData)) {
        return (
            <div>
                <h1>No doctor data found</h1>
            </div>
        );
    }
      
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
      };
    
    // const displayDoctors = isSearched ? filteredDoctors : doctors;

    return (
    <div  >
    <center>
        <div style={{marginTop:"200px" ,width:"50%"}}>
            <h1>Search doctor by speciality</h1>
            <input
              type="text"
              className="search-doctor-input-box"
              placeholder="Search doctors by specialty..."/>
              <button>click here</button>
        </div>
      <div className="searchpage-container" style={{marginTop:"250px"}}>
        <div className="search-results-container">
              {storedDoctorData.map((doctor) => (
                <div className="doctor-card-container" key={doctor.name}>
                   <div className="doctor-card-details-container">
                   <div className="doctor-card-details">
                     <div className="doctor-card-detail-name">{doctor.name}</div>
                     <div className="doctor-card-detail-speciality">{doctor.speciality}</div>
                     <div className="doctor-card-detail-experience">{doctor.experience} years experience</div>
                     <div className="doctor-card-detail-consultationfees">Ratings: {doctor.ratings}
                    </div>
                   </div>
        </div>
        <div className="doctor-card-options-container">
        <Popup
          style={{ backgroundColor: '#FFFFFF'}}
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
                {/* <img  alt="Placeholder" className="doctor-profile-image-placeholder" /> */}
                </div>
                <div className="doctor-card-details">
                  <div className="doctor-card-detail-name">{doctor.name}</div>
                  <div className="doctor-card-detail-speciality">{doctor.speciality}</div>
                  <div className="doctor-card-detail-experience">{doctor.experience} years experience</div>
                  <div className="doctor-card-detail-consultationfees">Ratings: {doctor.ratings}</div>
                </div>
              </div>

              {appointments.length > 0 ? (
                <>
                  <h3 style={{ textAlign: 'center' }}>Appointment Booked!</h3>
                  {appointments.map((appointment) => (
                    <div className="bookedInfo" key={appointment.id}>
                      <p>Name: {appointment.name}</p>
                      <p>Phone Number: {appointment.phoneNumber}</p>
                      <button onClick={() => handleCancel(appointment.id)}>Cancel Appointment</button>
                    </div>
                  ))}
                </>
              ) : (
                <AppointmentForm doctorName={doctor.name} doctorSpeciality={doctor.speciality} onSubmit={handleFormSubmit} />
              )}
            </div>
          )}
        </Popup> 
      </div>         
    </div>  
              ))}
        </div> 
      </div>
    </center>
    </div>
    
    )
}


export default DoctorCard; 
