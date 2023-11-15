import React from "react";
import {Link, useNavigate} from "react-router-dom"
import "./Navbar.css"
function Navbar () {
    const navigate = useNavigate();
    const handleLogout = () => {
        sessionStorage.clear();
        navigate("/login");
    }
    const userName = sessionStorage.getItem("name");
    const extractedName = userName ? userName.split('@')[0] : '';
    const isLoggedIn = userName !== null;
    if (isLoggedIn) {
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
                    <li className="link">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="link">
                        <a href="#">Appointments</a>
                    </li>
                    <h1>Welcome, {isLoggedIn && <span>{extractedName}</span>}</h1>
                    <li className="link">
                        <button onClick={handleLogout} className="btn1">
                            Logout
                        </button>
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
                    <Link to="/" className="link">
                        Home
                    </Link>
                    <li className="link">
                        <a href="#">Appointments</a>
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