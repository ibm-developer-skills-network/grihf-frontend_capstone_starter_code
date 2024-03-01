import React, { useEffect, useState } from "react";
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../config";


function Login () {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();
    useEffect(() => {
        if (sessionStorage.getItem("auth-token")) {
            navigate("/")
        }
    }, []);

    const login = async (e) => {
        e.preventDefault();
        const response = await fetch(`${API_URL}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email:email,
                password: password,
            }),

        });
        const json = await response.json();
        if (json.authtoken) {
            sessionStorage.setItem('auth-token', json.authtoken);
            sessionStorage.setItem('email', email);
            navigate('/');
            window.location.reload();
        } else {
            if (json.errors) {
                for (const error of json.errors) {
                    alert(error.msg);
                }
            } else {
                alert(json.error);
            }
        } 
    }
    return (
        
    <div className="container">
    <div className="login-grid">
        <div className="login-text">
            <h2>Login</h2>
        </div>
        <div className="login-text">
            Are you a new member? <span><Link to= "/signup" style={{color: "#2190FF"}}> Sign Up Here</Link></span>
        </div>
        <br />
        <div class="login-form">
            <form onSubmit={login}> 
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" required className="form-control" placeholder="Enter your email" aria-describedby="helpId"/>
                </div> 
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" required className="form-control" placeholder="Enter your password" aria-describedby="helpId"/>
                </div>  
                <div class="btn-group">
                    <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light" style={{width: "40%"}}>Submit</button>
                    <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light" style={{width: "40%"}}>Reset</button>
                </div> 
                <br />
                <div className="login-text">
                    Forgot Password?
                </div>                 
             </form>                   
        </div>
    </div>      
        </div>
        
    )
}


export default Login;