
import DoctorCardIC from "../InstantConsultationBooking/DoctorCardIC/DoctorCardIC";
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';



const initSpeciality = [
    'Dentist', 'Gynecologist/obstetrician', 'General Physician', 'Dermatologist', 'Ear-nose-throat (ent) Specialist', 'Homeopath', 'Ayurveda'
];

function FindDoctorSearch() {
    const [searchParams] = useSearchParams();
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
    const [searchDoctor, setSearchDoctor] = useState('');
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);

    const navigate = useNavigate();

    const getDoctorsDetails = () => {
        fetch('https://api.npoint.io/9a5543d36f1460da2f63')
            .then(res => res.json())
            .then(data => {
                setDoctors(data);
                filterDoctors(data, searchParams.get('speciality'));
            })
            .catch(err => console.log(err));
    };

    const filterDoctors = (data, speciality) => {
        if (speciality) {
            const filtered = data.filter(doctor => doctor.speciality.toLowerCase() === speciality.toLowerCase());
            setFilteredDoctors(filtered);
            setIsSearched(true);
        } else {
            setFilteredDoctors([]);
            setIsSearched(false);
        }
    };

    const handleSearch = (searchText) => {
        setSearchDoctor(searchText);
        if (searchText === '') {
            setFilteredDoctors([]);
            setIsSearched(false);
        } else {
            const filtered = doctors.filter(doctor =>
                doctor.speciality.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredDoctors(filtered);
            setIsSearched(true);
        }
    };

    useEffect(() => {
        getDoctorsDetails();
    }, [searchParams]);

    return (
        <div className='finddoctor'>
            <center>
                <div className="home-search-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '150px' }} >
                    <div className="doctor-search-box">
                        <input
                            type="text"
                            className="search-doctor-input-box"
                            placeholder="Search doctors by specialty..."
                            value={searchDoctor}
                            onChange={(e) => handleSearch(e.target.value)}
                            onFocus={() => setDoctorResultHidden(false)}
                            onBlur={() => setDoctorResultHidden(true)}
                        />
                        <div className="search-doctor-input-results" hidden={doctorResultHidden}>
                            {isSearched && filteredDoctors.length > 0 ? (
                                filteredDoctors.map(doctor => <DoctorCardIC className="doctorcard" {...doctor} key={doctor.name} />)
                            ) : (
                                <p>No doctors found.</p>
                            )}
                        </div>
                    </div>
                </div>
            </center>
        </div>
    )
}

export default FindDoctorSearch;
