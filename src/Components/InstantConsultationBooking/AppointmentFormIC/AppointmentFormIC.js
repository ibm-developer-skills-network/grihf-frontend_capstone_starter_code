import React, { useState } from 'react';
import Notification from '../../Notification/Notification';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const AppointmentFormIC = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
  

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
    <div style={{height:"50px"}}>
        <form onSubmit={handleFormSubmit} className="appointment-form" >
            <div className="form-group">
            <TextField 
                id="name" 
                label="Enter your name here" variant="outlined"  value={name}
                onChange={(e) => setName(e.target.value)} fullWidth required type="text"/>
            </div>
            <div className="form-group">
            <TextField  type="tel" 
                label="Enter your phone number here" variant="outlined"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required fullWidth/>
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
        <Button variant="contained" color="success" type="submit">Book Now</Button>
            {/* <button type="submit">Book Now</button> */}
        </form>
   
    </div>    
      
    );
  };

export default AppointmentFormIC
