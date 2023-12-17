import React, { useState, useEffect } from 'react';
import FindDoctorSearch from './FindDoctorSearch/FindDoctorSearch';
import DoctorCard from './DoctorCard/DoctorCard';
import { useSearchParams } from 'react-router-dom';

function BookingConsultation() {
  const [searchParams] = useSearchParams();
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    // console.log(storedDoctorData);
    if (storedDoctorData && Array.isArray(storedDoctorData)) {
      setDoctors(storedDoctorData);
    }
  }, []);

  useEffect(() => {
    if (searchParams.get('speciality')) {
      const filtered = doctors.filter(
        (doctor) =>
          doctor.speciality.toLowerCase() ===
          searchParams.get('speciality').toLowerCase()
      );
      setFilteredDoctors(filtered);
      setIsSearched(true);
    } else {
      setFilteredDoctors([]);
      setIsSearched(false);
    }
  }, [searchParams, doctors]);

  const handleSearch = (searchText) => {
    if (searchText === '') {
      setFilteredDoctors([]);
      setIsSearched(false);
    } else {
      const filtered = doctors.filter(
        (doctor) =>
          doctor.speciality.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredDoctors(filtered);
      setIsSearched(true);
    }
  };

  return (
    <div>
      <center>
        <div className="searchpage-container">
        <centre><h2>Find a doctor at your own ease</h2></centre>
          <FindDoctorSearch onSearch={handleSearch} />
          <div className="search-results-container">
            {isSearched ? (
              <div>
                <centre><h2>
                  {filteredDoctors.length} doctors are available{' '}
                  {searchParams.get('location')}
                </h2></centre>
                <centre><h3>
                  Book appointments with minimum wait-time & verified doctor
                  details
                </h3></centre>
                {filteredDoctors.length > 0 ? (
                  filteredDoctors.map((doctor) => (
                    <div key={doctor.name}>
                      <DoctorCard className="doctorcard" {...doctor} />
                    </div>
                  ))
                ) : (
                  <p>No doctors found.</p>
                )}
              </div>
            ) : (
              <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between", paddingTop:"10px"}}>
                {doctors.length > 0 ? (
                  doctors.map((doctor) => (
                    <div key={doctor.name}>
                      <DoctorCard className="doctorcard" {...doctor} />
                    </div>
                  ))
                ) : (
                  <p>No doctors available.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </center>
    </div>
  );  
}

export default BookingConsultation;






