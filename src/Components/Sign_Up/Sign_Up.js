import React, { useEffect, useState } from 'react';
import './Sign_Up.css'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Sign_Up = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState('');

    const navigate = useNavigate();
    useEffect(() => {
    if (sessionStorage.getItem("auth-token")) {
      navigate("/")
    }
  }, []);

  const register = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
            }),
        });

        const json = await response.json();

        if (response.ok) {
            // Successful registration
            if (json.authtoken) {
                // Store authentication token and user data in sessionStorage
                sessionStorage.setItem("auth-token", json.authtoken);
                sessionStorage.setItem("name", name);
                sessionStorage.setItem("phone", phone);
                sessionStorage.setItem("email", email);
                
                // Redirect to home page or perform other necessary actions
                navigate("/");
                window.location.reload();
            }
        } else {
            // Error handling for unsuccessful registration
            let errorMessage = '';
            if (json.errors) {
                for (const error of json.errors) {
                    errorMessage += error.msg + ' ';
                }
            } else {
                errorMessage = json.error || 'Unknown error occurred';
            }
            console.log(errorMessage);
            setShowerr(errorMessage);
        }
    } catch (error) {
        // Error handling for fetch errors or exceptions
        console.error("Error during registration:", error);
        setShowerr("Error during registration. Please try again later.");
    }
};


    return (
        <div className="container" style={{marginTop:'5%'}}>
        <div className="signup-grid">
        <div className="signup-form">
         <form method="POST" onSubmit={register}>
           <div className="form-group">
                <label htmlFor="email">Email</label>
                 <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                 {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
            </div>
            <div className="form-group">
             <label htmlFor="name">Name</label>
             <input value={name} type="text" onChange={(e) => setName(e.target.value)} name="name" id="name" className="form-control" placeholder="Enter your name" aria-describedby="helpId" />
             {/* {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>} */}
            </div>
           <div className="form-group">
             <label htmlFor="phone">Phone</label>
             <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" name="phone" id="phone" className="form-control" placeholder="Enter your phone number" aria-describedby="helpId" />
             {/* {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>} */}
             </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" className="form-control" placeholder="Enter your password" aria-describedby="helpId" />
              {/* {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>} */}
            </div>
            <div className="btn-group">
               <button  type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light" style={{width: "40%"}}>Submit</button>
               <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light"  style={{width: "40%"}}>Reset</button>
               {/* {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>} */}
            </div>                  

         </form>
         </div>
         </div>
         </div>
    );
}

export default Sign_Up;






