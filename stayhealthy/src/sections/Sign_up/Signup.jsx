import React from 'react'

const Signup = () => {
  return (
    <section id="hero" className="vh90">
    <div className="padding20"></div>
    <div className="flexbox flex-column width1000 padding60 bg-white">
      <h3 className="center">Sign up</h3>
      <p className="padding20 text-center">Already a member? <a href="Signup.html">Login</a></p>
      <div className="flexbox flex-row">
        <div className="flex1 m-r-30">
          <h4>Role</h4>
          <fieldset>
            <input type="text" className="input width100" placeholder="Select Role" /><span className="icon-arrowdown"></span>
          </fieldset>
        </div>
        <div className="flex1">
        </div>
      </div>
      <div className="flexbox flex-row">
        <div className="flex1 m-r-30">
          <h4>Name</h4>
          <input type="text" className="input width100" placeholder="Enter your name" />
          <h4>Phone</h4>
          <input type="text" className="input width100" placeholder="Enter your phone number" />
        </div>
        <div className="flex1">
          <h4>Email</h4>
          <input type="text" className="input width100" placeholder="Enter your email" />
          <h4>Password</h4>
          <fieldset>
           <input type="password" className="input width100" placeholder="Enter your password" /><span className="icon-eye"></span>
          </fieldset>
        </div>
      </div>
        <div className="padding20"></div>
      <button className="button blue width50">Login</button>
      <button className="button red width50">Reset</button>
    </div>
    <div className="padding20"></div>
  </section>
  )
}

export default Signup