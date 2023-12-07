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
          <FindDoctorSearch onSearch={handleSearch} />
          <div className="search-results-container">
            {isSearched ? (
              <center>
                <h2>
                  {filteredDoctors.length} doctors are available{' '}
                  {searchParams.get('location')}
                </h2>
                <h3>
                  Book appointments with minimum wait-time & verified doctor
                  details
                </h3>
                {filteredDoctors.length > 0 ? (
                  filteredDoctors.map((doctor) => (
                    <div key={doctor.name}>
                      <DoctorCard className="doctorcard" {...doctor} />
                    </div>
                  ))
                ) : (
                  <p>No doctors found.</p>
                )}
              </center>
            ) : (
              <center>
                <h2>List of Doctor Specialities</h2>
                {doctors.length > 0 ? (
                  doctors.map((doctor) => (
                    <div key={doctor.name}>
                      <DoctorCard className="doctorcard" {...doctor} />
                    </div>
                  ))
                ) : (
                  <p>No doctors available.</p>
                )}
              </center>
            )}
          </div>
        </div>
      </center>
    </div>
  );  
}

export default BookingConsultation;






