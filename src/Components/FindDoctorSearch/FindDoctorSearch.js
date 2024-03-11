import React, { useEffect, useState } from 'react';
import './FindDoctorSearch.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';

const initSpeciality = [
    'Dentist', 'Gynecologist/obstetrician', 'General Physician', 'Dermatologist', 'Ear-nose-throat (ent) Specialist', 'Homeopath', 'Ayurveda'
];

function FindDoctorSearch() {
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const [specialities, setSpecialities] = useState(initSpeciality);
    // const [doctors, setDoctors] = useState([]);
    // const [filteredDoctors, setFilteredDoctors] = useState([]);
    // const [isSearched, setIsSearched] = useState(false);
    // const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    // Function to handle the selection of a specific specialty
    const handleDoctorSelect = (speciality) => {
        setSearchDoctor(speciality); // Update the searchDoctor state with the selected specialty
        setDoctorResultHidden(true); // Hide the search results
        navigate(`/booking-consultation?speciality=${speciality}`);
    };
    const handleSearchButtonClick = () => {
    navigate(`/booking-consultation?speciality=${searchDoctor}`);
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
                {/* Search Container */}
                <div className="home-search-container" style={{ marginTop: '50px' ,marginLeft:"30%"}}>
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
                        {/* Search Icon */}
                         <Avatar  variant="square" >
                         <SearchIcon  onClick={handleSearchButtonClick} sx={{ fontSize: 40 }}>
                        </SearchIcon >
                         </Avatar>
                        {/* Search Results */}
                        <div className="search-doctor-input-results" hidden={doctorResultHidden} > 
                            {/* Display filtered specialties */}
                            {filteredSpecialities.map(speciality => (
                                <div
                                    className="search-doctor-result-item"
                                    key={speciality}
                                    onMouseDown={() => handleDoctorSelect(speciality)}
                                    style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}
                                >
                                    {/* Search Icon */}
                                    <div className="findiconimg">
                                    <img className='findIcon' src={process.env.PUBLIC_URL + '/images/search.svg'} alt="" />
                                    </div>
                                    <span>{speciality}</span>
                                </div>
                            ))}
                        </div>

                    </div>!
                </div>
            </center>
        </div>
    )
}

export default FindDoctorSearch;




