import React, { useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import "./Navbar.css"
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';


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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    // Check if the user is logged
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
                            {/* SVG icon */}
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
                    <Link to="/reviews">
                       <Typography>Reviews</Typography>
                    </Link>
                    <div>
                        <Button
                            id="fade-button"
                            aria-controls={open ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                        <Typography>
                            Welcome, {isUser && <span>{extractedName}</span>}
                        </Typography>
                        </Button>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                            'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            <MenuItem onClick={handleClose}>
                                <Typography>
                                    Welcome, {isUser && <span>{extractedName}</span>}
                                </Typography>
                            </MenuItem>
                            <Link to="/user-profil">
                                <MenuItem onClick={handleClose}>
                                    Profil
                                </MenuItem>
                            </Link>
                            <MenuItem onClick={handleClose}>
                                Reports
                            </MenuItem>
                        </Menu>
                    </div> 
                    <li className="link">
                        <Button 
                            onClick={handleLogout} 
                            variant="outlined" 
                            color="error"
                            >
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
                    <Link to="/signup" className="link">
                        <a>Appointments</a>
                    </Link>
                    <li className="link">
                        <a href="#">Health Blog</a>
                    </li>
                    <Link>
                        <a>Reviews</a>
                    </Link>
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