

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

    // const [searchQuery, setSearchQuery] = useState('');

    // const handleSearch = (event) => {
    //     const query = event.target.value.toLowerCase();
    //     setSearchQuery(query);
    //     if (query) {
    //         const filtered = storedDoctorData.filter(
    //             (doctor) => doctor.speciality.toLowerCase().includes(query)
    //         );
    //         setFilteredDoctors(filtered);
    //         setIsSearched(true);
    //     } else {
    //         setIsSearched(false);
    //     }
    // };
    return (
        <div>
            <div style={{ marginTop: "200px", width: "50%" }}>
                <h1>Search doctor by speciality</h1>
                <input
                    type="text"
                    className="search-doctor-input-box"
                    placeholder="Search doctors by specialty..."
                    onChange={handleSearch}
                />
                <button>click here</button>
            </div>
            <div className="searchpage-container" style={{ marginTop: "250px" }}>
                <div className="search-results-container">
                    {isSearched ? (
                        filteredDoctors.map((doctor) => (
                            // ... (existing doctor card rendering)
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
                                </div>
                        ))
                    ) : (
                        storedDoctorData.map((doctor) => (
                            // ... (existing doctor card rendering)
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
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default DoctorCard;

