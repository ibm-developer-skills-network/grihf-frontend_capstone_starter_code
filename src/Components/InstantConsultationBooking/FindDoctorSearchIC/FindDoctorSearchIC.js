import React, { useState } from 'react';
import './FindDoctorSearchIC.css';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import doctorSearch from "../DoctorCardIC/doctorSearch.jpg"

const initSpeciality = [
    'Dentist', 'Gynecologist/obstetrician', 'General Physician', 'Dermatologist', 'Ear-nose-throat (ent) Specialist', 'Homeopath', 'Ayurveda'
];

function FindDoctorSearchIC() {
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const [specialities, setSpecialities] = useState(initSpeciality);
    const navigate = useNavigate();

    // Function to handle the selection of a specific specialty
    const handleDoctorSelect = (speciality) => {
        setSearchDoctor(speciality); // Update the searchDoctor state with the selected specialty
        setDoctorResultHidden(true); // Hide the search results
        navigate(`/instant-consultation?speciality=${speciality}`);
    };

    // Function to handle changes in the search input
    const handleSearchInputChange = (text) => {
        setSearchDoctor(text); // Update the searchDoctor state with the entered text
        setDoctorResultHidden(false); // Show the doctor results
    };

    // Filter specialties based on the entered search text
    const filteredSpecialities = specialities.filter(speciality =>
        speciality.toLowerCase().includes(searchDoctor.toLowerCase())
    );

    return (
        <div className='finddoctor'>
            <center>
                {/* Title */}
                <Typography style={{ fontSize: "16px" }} sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
                    Find a doctor and Consult instantly
                </Typography>
                <div>
                    <img src={doctorSearch} style={{ height:"300px", width:"400px" }} />
                </div>
                {/* Icon */}
                {/* <div>
                    <i style={{ color: '#3498db', fontSize: '5rem' }} className="fa fa-user-md"></i>
                </div> */}
                {/* Search Container */}
                <div className="home-search-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="doctor-search-box">
                        {/* Search Input */}
                        <input
                            type="text"
                            className="search-doctor-input-box"
                            placeholder="Search doctors by specialty..."
                            value={searchDoctor}
                            onChange={(e) => handleSearchInputChange(e.target.value)}
                            onFocus={() => setDoctorResultHidden(false)}
                            onBlur={() => setDoctorResultHidden(true)}
                        />
                       
                        {/* Search Results */}
                        <div className="search-doctor-input-results" hidden={doctorResultHidden}>
                            {/* Display filtered specialties */}
                            {filteredSpecialities.map(speciality => (
                                <div
                                    className="search-doctor-result-item"
                                    key={speciality}
                                    onMouseDown={() => handleDoctorSelect(speciality)}
                                >
                                    {/* Search Icon */}
                                    <div className="findiconimg">
                                    <img className='findIcon' src={process.env.PUBLIC_URL + '/images/search.svg'} alt="" />
                                    </div>
                                    <span>{speciality}</span>
                                 
                                
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </center>
        </div>
    )
}

export default FindDoctorSearchIC;
