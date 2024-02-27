import React from 'react'

const login = () => {
  return (
    <section id="hero" className="vh90">
        <div className="padding20"></div>
        <div className="flexbox flex-column left width500 padding60 bg-white">
            <h3 className="center">Login</h3>
            <p className="padding20 text-center">Are you a new member? <a href="Signup.html">Sign Up Here</a></p>
            <h4>Email</h4>
            <input type="text" className="input width100" placeholder="Enter your email" />
            <h4>Password</h4>
            <fieldset className="width100">
                <input type="password" className="input width100" placeholder="Enter your password" /><span className="icon-eye"></span>
            </fieldset>
            <div className="padding20"></div>
            <button className="button blue width100">Login</button>
            <button className="button red width100">Reset</button>
            <div className="padding20"></div>
            <p className="center">Forgot Password?</p>
        </div>
    <div className="padding20"></div>
  </section>
  )
}

export default login