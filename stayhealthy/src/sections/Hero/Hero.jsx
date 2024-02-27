import React from 'react'

const Hero = () => {
  return (
    <section id="hero">
      <div className="flexbox flex-column width800 padding20 flex-center vh90">
        <h1>Your health <br /><span className="subline">our responsibility</span></h1>
        <p className="padding20 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
        <button className="button blue width50">Get started</button>
        <div className="padding60"></div>
      </div>
    </section>
  )
}

export default Hero