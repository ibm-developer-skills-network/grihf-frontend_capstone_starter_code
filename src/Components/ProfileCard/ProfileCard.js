import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function ProfilCard() {
  const [userDetails, setUserDetails] = useState({});
 const [updatedDetails, setUpdatedDetails] = useState({});
 const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const authtoken = sessionStorage.getItem("auth-token");
    if (!authtoken) {
      navigate("/login");
    } else {
      fetchUserProfile();
    }
  }, [navigate]);

  const fetchUserProfile = async () => {
    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email"); // Get the email from session storage

  if (!authtoken) {
    navigate("/login");
  } else {
    const response = await fetch(`${API_URL}/api/auth/user`, {
      headers: {
        "Authorization": `Bearer ${authtoken}`,
        "Email": email, // Add the email to the headers
      },
    });
    if (response.ok) {
      const user = await response.json();
      setUserDetails(user);
      setUpdatedDetails(user);
    } else {
      // Handle error case
      throw new Error("Failed to fetch user profile");
    }
  }
} catch (error) {
  console.error(error);
  // Handle error case
}
};

const handleEdit = () => {
setEditMode(true);
};

const handleInputChange = (e) => {
setUpdatedDetails({
  ...updatedDetails,
  [e.target.name]: e.target.value,
});
};
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const authtoken = sessionStorage.getItem("auth-token");
    const email = sessionStorage.getItem("email"); // Get the email from session storage

    if (!authtoken || !email) {
      navigate("/login");
      return;
    }

    const payload = { ...updatedDetails };
    const response = await fetch(`${API_URL}/api/auth/user`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${authtoken}`,
        "Content-Type": "application/json",
        "Email": email,
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      // Update the user details in session storage
      sessionStorage.setItem("name", updatedDetails.name);
      sessionStorage.setItem("phone", updatedDetails.phone);

      setUserDetails(updatedDetails);
      setEditMode(false);
      // Display success message to the user
      alert(`Profile Updated Successfully!`);
      navigate("/");
    } else {
      // Handle error case
      throw new Error("Failed to update profile");
    }
  } catch (error) {
    console.error(error);
    // Handle error case
  }
};

return (
<div className="profile-container" style={{marginTop:"100px", width:"30%",marginLeft:"250px"}}>
  {editMode ? (
<form onSubmit={handleSubmit}>
<label>
  Email
  <input
    type="email"
    name="email"
    value={userDetails.email}
    disabled // Disable the email field
  />
</label>
<label>
         First Name
         <input
           type="text"
           name="name"
           value={updatedDetails.name}
           onChange={handleInputChange}
         />
       </label>
       <label>
         Last Name
         <input
           type="text"
           name="last_name"
        //    value={updatedDetails.}
        //    onChange={handleInputChange}
         />
       </label>
       <label>
         Age
         <input
           type="number"
           name="age"
        //    value={updatedDetails.}
        //    onChange={handleInputChange}
         />
       </label>
       <label>
         Phone
         <input
           type="text"
           name="phone"
           value={updatedDetails.phone}
           onChange={handleInputChange}
         />
       </label>
       <label>
         Country
         <input
           type="text"
           name="country"
        //    value={updatedDetails.}
        //    onChange={handleInputChange}
         />
       </label>
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Male"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Male" />
        <FormControlLabel value="male" control={<Radio />} label="Female" />
      </RadioGroup>
    </FormControl>
    

       
<Button variant="contained" type="submit" style={{width:"30%",marginLeft:"100px",marginTop:"30px"}}>Save</Button>
</form>
) : (
<div className="profile-details" style={{marginLeft:"100px"}}>
<div>
<PersonIcon  sx={{ fontSize: 40 }} ></PersonIcon>
<h1>Welcome, {userDetails.name}</h1>
</div>
<p> <b>Email:</b> {userDetails.email}</p>
<p><b>Phone:+</b> {userDetails.phone}</p>
<Button variant="contained" onClick={handleEdit} style={{width:"30%",marginLeft:"100px",marginTop:"20px"}}>Edit</Button>
</div>
)}
</div>
);
};

export default ProfilCard;
