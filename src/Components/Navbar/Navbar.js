import React, { useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import "./Navbar.css"
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
function Navbar () {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
   
    const navigate = useNavigate();
    useEffect(() => {
        // Check if the user is logged 
        const authToken = sessionStorage.getItem('auth-token');
        setIsLoggedIn(!!authToken); // Update isLoggedIn state based on the presence of the auth token
     
    }, []);
    const handleLogout = () => {
        sessionStorage.clear();
        navigate("/login");
    }
    const userName = sessionStorage.getItem("email");
    const extractedName = userName ? userName.split('@')[0] : '';
    const isUser = userName !== null;
    if (isLoggedIn && isUser) {
        return (
            <nav>
                <div className="nav__logo">
                    <Link to="/">
                        StayHealthy{" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="26"
                            width="26"
                            viewBox="0 0 1000 1000"
                            style={{ fill: "#3685fb" }}
                        >
                            {/* Your SVG icon */}
                        </svg>
                    </Link>    
                </div>
                <ul className="nav__links active">
                    <Link to="/services" className="link">
                        <a>Home</a>
                    </Link>
                    <Link to="/booking-consultation" className="link">
                        <a >Appointments</a>
                    </Link>
                    <Link to="/instant-consultation" className="link">
                        <a>Booking</a>
                    </Link>
                    <Typography>Welcome, {isUser && <span>{extractedName}</span>}</Typography>
                    <li className="link">
                        <Button onClick={handleLogout} variant="outlined" color="error">
                            Logout
                        </Button>
                    </li>
                </ul>
            </nav>
        );
    } else {
        return (
            <nav>
                <div className="nav__logo">
                    <a href="/">
                        StayHealthy{" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="26"
                            width="26"
                            viewBox="0 0 1000 1000"
                            style={{ fill: "#3685fb" }}
                        >
                            {/* Your SVG icon */}
                        </svg>
                    </a>
                </div>
                <div className="nav__icon">
                    <i className="fa fa-times fa fa-bars"></i>
                </div>
                <ul className="nav__links active">
                    <Link to="/services" className="link">
                        <a>Home</a>
                    </Link>
                    <li className="link">
                        <a href="#">Appointments</a>
                    </li>
                    <li className="link">
                        <a href="#">Health Blog</a>
                    </li>
                    <li>
                        <a href="#">Reviews</a>
                    </li>
                    <Link to="/signup" className="link">
                        <button className="btn1">Sign Up</button>
                    </Link>
                    <Link to="/login" className="link">
                        <button className="btn1">Login</button>
                    </Link>
                </ul>
            </nav>
        );
    }
}


export default Navbar;