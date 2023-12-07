import { useEffect, useState } from "react"
import "./DoctorCard.css"
import { Link, useSearchParams } from "react-router-dom";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import { v4 as uuidv4 } from 'uuid';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./DoctorCard.css"
import 'reactjs-popup/dist/index.css';



function DoctorCard ({name, speciality, experience, ratings}){

    const [doctors, setDoctors] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const [searchParams] = useSearchParams();
    const [filteredDoctors, setFilteredDoctors] = useState(false);
    const [isSearched, setIsSearched] = useState(false);
    
    const [showAppointmentForm, setShowAppointmentForm] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');


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
        {/* <div style={{marginTop:"200px" ,width:"50%"}}>
            <h1>Search doctor by speciality</h1>
            <input
              type="text"
              className="search-doctor-input-box"
              placeholder="Search doctors by specialty..."/>
              <button>click here</button>
        </div> */}
      <div className="searchpage-container" style={{marginTop:"250px"}}>
        <div className="search-results-container">
                <div className="doctor-card-container">
                   <div className="doctor-card-details-container">
                   <div className="doctor-card-details">
                     <div className="doctor-card-detail-name">{name}</div>
                     <div className="doctor-card-detail-speciality">{speciality}</div>
                     <div className="doctor-card-detail-experience">{experience} years experience</div>
                     <div className="doctor-card-detail-consultationfees">Ratings: {ratings}
                    </div>
                   </div>
        </div>       
    </div>           
    </div> 
    </div>
    </center>
    </div>
    
    )
}


export default DoctorCard; 
