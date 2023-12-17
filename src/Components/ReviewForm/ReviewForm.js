import React from "react";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import Button from '@mui/material/Button';
import GiveReviews from "./GiveReviews";



function ReviewForm() {

    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    
    
    return (
    <div >
       <Table style={{marginTop:"200px", width:"70%",marginLeft:"100px"}}>
        <TableHead>
          <TableRow>
            <TableCell sx={{backgroundColor:"#42a5f5", fontFamily:"sans-serif", fontSize:"16px",fontWeight:"bold",color:"white"}}>
              Doctor Name
            </TableCell>
            <TableCell sx={{backgroundColor:"#42a5f5", fontFamily:"sans-serif", fontSize:"16px",fontWeight:"bold",color:"white"}}>
              Doctor Speciallity
            </TableCell>
            <TableCell sx={{backgroundColor:"#42a5f5", fontFamily:"sans-serif", fontSize:"16px",fontWeight:"bold",color:"white"}}>
                Experience
            </TableCell>
            <TableCell sx={{backgroundColor:"#42a5f5", fontFamily:"sans-serif", fontSize:"16px",fontWeight:"bold",color:"white"}}>
              Provide feedback
            </TableCell>
            <TableCell sx={{backgroundColor:"#42a5f5", fontFamily:"sans-serif", fontSize:"16px",fontWeight:"bold",color:"white"}}>
              Review Given
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {storedDoctorData.map((doctor) => (
            <TableRow key={doctor.name}>
              <TableCell>{doctor.name}</TableCell>
              <TableCell align="centre">{doctor.speciality}</TableCell>
              <TableCell align="centre">{doctor.experience}</TableCell>
              <TableCell><GiveReviews></GiveReviews></TableCell>
              <TableCell>No Review</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </div>
    );
}



export default ReviewForm;