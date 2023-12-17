import React, { useEffect, useState } from 'react';
import './InstantConsultation.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import FindDoctorSearchIC from './FindDoctorSearchIC/FindDoctorSearchIC';
import DoctorCardIC from './DoctorCardIC/DoctorCardIC';
import DoctorCard from '../DoctorCard/DoctorCard';

function InstantConsultation () {
    const [searchParams] = useSearchParams();
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [isSearched, setIsSearched] = useState(false);

    const saveDoctorDataToLocalStorage = (data) => {
        localStorage.setItem('doctorData', JSON.stringify(data));
      };
    
    const getDoctorsDetails = () => {
        fetch('https://api.npoint.io/9a5543d36f1460da2f63')
        .then(res => res.json())
        .then(data => {
            if (searchParams.get('speciality')) {
                // window.reload()
                const filtered = data.filter(doctor => doctor.speciality.toLowerCase() === searchParams.get('speciality').toLowerCase());

                setFilteredDoctors(filtered);
                
                setIsSearched(true);
                // window.reload()
            } else {
                setFilteredDoctors([]);
                setIsSearched(false);
            }
            setDoctors(data);
             // Save data to localStorage once fetched
             saveDoctorDataToLocalStorage(data);
        })
        .catch(err => console.log(err));
    }
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
    const navigate = useNavigate();
    useEffect(() => {
        getDoctorsDetails();
        const authtoken = sessionStorage.getItem("auth-token");
        if (!authtoken) {
            navigate("/login");
        }
    }, [searchParams])

    return (
        <center>
            <div  className="searchpage-container">
            <FindDoctorSearchIC onSearch={handleSearch} />
            <div className="search-results-container">
            {isSearched ? (
                <center>
                    <h2>{filteredDoctors.length} doctors are available {searchParams.get('location')}</h2>
                    <h3>Book appointments with minimum wait-time & verified doctor details</h3>
                    {filteredDoctors.length > 0 ? (
                    filteredDoctors.map(doctor => <div key={doctor.name}>
                        <DoctorCardIC className="doctorcard" {...doctor} />
                        
                      </div>)
                
                    ) : (
                    <p>No doctors found.</p>
                    )}
                   
                </center>
                ) : (
                ''
                )}
            </div>
        </div>
        </center>
    )
}

export default InstantConsultation