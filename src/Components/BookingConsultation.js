import React from 'react';
import FindDoctorSearch from './FindDoctorSearch/FindDoctorSearch';
import DoctorCard from './DoctorCard/DoctorCard'



function BookingConsultation () {
    return (
        <div>
          <FindDoctorSearch></FindDoctorSearch>
          <DoctorCard></DoctorCard>
        </div>
    )
}

export default BookingConsultation