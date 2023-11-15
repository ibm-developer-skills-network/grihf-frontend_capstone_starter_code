import React from "react";
import "./Login.css"


function Login () {
    return (
        
    <div className="container">
    <div className="login-grid">
        <div className="login-text">
            <h2>Login</h2>
        </div>
        <div className="login-text">
            Are you a new member? <span><a href="../Sign_Up/Sign_Up.html" style={{color: "#2190FF"}}> Sign Up Here</a></span>
        </div>
        <br />
        <div class="login-form">
            <form> 
                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" required className="form-control" placeholder="Enter your email" aria-describedby="helpId"/>
                </div> 
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" required className="form-control" placeholder="Enter your password" aria-describedby="helpId"/>
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