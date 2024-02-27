import React from 'react'
import SearchDoctor from './SearchDoctor'

const Appointments = () => {
  return (
    <section id="appointments">
      <div className="flexbox flex-column width1000 padding20">
        <h2>Find a doctor <br />at your own ease</h2>
        <div className="width100 padding20">
          <SearchDoctor />
        </div>
        <h3>8 doctors available in </h3>
        <p>Book appointments with minimun wait-time & verified doctor details</p>
      </div>
      <div className="flexbox flex-row width1400 padding20 center">
        <div className="dr-card">
          <img src="../../assets/doctor1.png" alt="Dr. Denis Rag" />
          <h4 className="dr-name">Dr. Denis Rag</h4>
          <p className="speciality">Dentist</p>
          <p className="experience">9 years experience</p>
          <p className="rating">Ratings: <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></p>
          <button className="button blue width100">Book Appointment <br /><span className="fee">No Booking Fee</span></button>
        </div>
        <div className="dr-card">
          <img src="./assets/doctor2.png" alt="Dr. Jiao Yang" />
          <h4 className="dr-name">Dr. Jiao Yang</h4>
          <p className="speciality">Dentist</p>
          <p className="experience">24 years experience</p>
          <p className="rating">Ratings: <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></p>
          <button className="button blue width100">Book Appointment <br /><span className="fee">No Booking Fee</span></button>
        </div>
        <div className="dr-card">
          <img src="./assets/doctor3.png" alt="Dr. Lyn Christie" />
          <h4 className="dr-name">Dr. Lyn Christie</h4>
          <p className="speciality">Dentist</p>
          <p className="experience">11 years experience</p>
          <p className="rating">Ratings: <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></p>
          <button className="button blue width100">Book Appointment <br /><span className="fee">No Booking Fee</span></button>
        </div>
      </div>
    </section>
  )
}

export default Appointments