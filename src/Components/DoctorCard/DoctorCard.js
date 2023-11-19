import { useEffect, useState } from "react"
import "./DoctorCard.css"
import { Link, useSearchParams } from "react-router-dom";



function DoctorCard ({name,speciality,experience,ratings,profilePic}){
    const [doctors, setDoctors] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const [searchParams] = useSearchParams();
    const [filteredDoctors, setFilteredDoctors] = useState(false);
    const [isSearched, setIsSearched] = useState(false);
    
    useEffect(() => {
        const getDoctorsDetails = async () => {
          try {
            const response = await fetch('https://api.npoint.io/9a5543d36f1460da2f63');
            const data = await response.json();
      
            // Set the initial list of doctors and filtered doctors
            setDoctors(data);
            setIsSearched(false);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        getDoctorsDetails();
      }, []);
      
      

    const displayDoctors = isSearched ? filteredDoctors : doctors;

    return (
    <center>
      <div className="searchpage-container" style={{marginTop:"20px"}}>
        <div className="search-results-container">
              {displayDoctors.map((doctor) => (
                <div className="doctor-card-container" key={doctor.name}>
                   <div className="doctor-card-details-container">
                   <div className="doctor-card-details">
                     <div className="doctor-card-detail-name">{doctor.name}</div>
                     <div className="doctor-card-detail-speciality">{doctor.speciality}</div>
                     <div className="doctor-card-detail-experience">{doctor.experience} years experience</div>
                     <div className="doctor-card-detail-consultationfees">Ratings: {doctor.ratings}</div>
                   </div>
                   </div>
                   <div>
                    <Link to="/appointment-form">
                       <button className='book-appointment-btn'>                    
                       <div>Book Appointment</div>
                       <div>No Booking Fee</div>
                       </button>
                    </Link>  
                </div>
                </div>  
              ))}
        </div>
        
      </div>
    </center>
    )
}


export default DoctorCard; 
