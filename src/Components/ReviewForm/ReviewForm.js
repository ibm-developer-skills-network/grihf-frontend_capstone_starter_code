import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import Button from '@mui/material/Button';
import GiveReviews from "./GiveReviews";




function ReviewForm() {

    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.text.primary,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        "&:nth-of-type(odd)": {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        "&:last-child td, &:last-child th": {
          border: 0,
        },
      }));

    if (!storedDoctorData || !Array.isArray(storedDoctorData)) {
        return (
            <div>
                <h1>No doctor data found</h1>
            </div>
        );
    }

    return (
    <div >
       <Table style={{marginTop:"200px", width:"70%",marginLeft:"100px"}}>
        <TableHead>
          <TableRow>
            <TableCell>
              <StyledTableCell>Doctor Name</StyledTableCell>
            </TableCell>
            <TableCell>
              <StyledTableCell>Doctor Speciallity</StyledTableCell>
            </TableCell>
            <TableCell>
              <StyledTableCell>Provide feedback</StyledTableCell>
            </TableCell>
            <TableCell>
              <StyledTableCell>Review Given</StyledTableCell>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {storedDoctorData.map((doctor) => (
            <TableRow key={doctor.name}>
              <TableCell>{doctor.name}</TableCell>
              <TableCell></TableCell>
               <TableCell><GiveReviews></GiveReviews></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </div>
    );
}



export default ReviewForm;