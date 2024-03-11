import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useLocation } from 'react-router-dom';


const AppointmentForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const location = useLocation();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [doctorName, setDoctorName] = useState('');
    const [doctorSpeciality, setDoctorSpeciality] = useState('')
  

    const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'];
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber });
      setName('');
      setPhoneNumber('');
      setSelectedDate(null); // Reset selectedDate after submission
      setSelectedSlot(null); // Reset selectedSlot after submission
    };

    return (
      <form onSubmit={handleFormSubmit} className="appointment-form" >
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
         <label>Date of Appointment:</label>
         <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()} // Restrict past dates
          placeholderText="Select a date"
        />
        </div>
        <div className="form-group">
         <label>Book Time Slot:</label>
            {/* Time Slot Selector (Dropdown) */}
        <select value={selectedSlot} onChange={(e) => handleSlotSelection(e.target.value)}>
          <option value="">Select a time slot</option>
          {timeSlots.map((slot, index) => (
            <option key={index} value={slot}>
              {slot}
            </option>
          ))}
        </select>
        </div>
        <button style={{width:"50%"}}type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentForm