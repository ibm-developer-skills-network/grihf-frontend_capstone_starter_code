import React from 'react'

const Reviews = () => {
  return (
    <section id="reviews">
      <div className="flexbox flex-column width1400 padding20">
        <h2>Reviews</h2>

        <div className="table">
          <div className="row header">
            <div className="cell">S.No.</div>
            <div className="cell">Doctor Name</div>
            <div className="cell">Doctor Specialty</div>
            <div className="cell">Provide Review</div>
            <div className="cell">Review Given</div>
          </div>
          <div className="row">
            <div className="cell">1</div>
            <div className="cell">Dr. John Doe</div>
            <div className="cell">Cardiology</div>
            <div className="cell"><button className="blue">Give Review</button></div>
            <div className="cell"></div>
          </div>
          <div className="row">
            <div className="cell">2</div>
            <div className="cell">Dr. Denis Raj</div>
            <div className="cell">Dentist</div>
            <div className="cell"><button className="blue">Give Review</button></div>
            <div className="cell"></div>
          </div>
          <div className="row">
            <div className="cell">3</div>
            <div className="cell">Dr. Jane Doe</div>
            <div className="cell">Internist</div>
            <div className="cell"><button className="blue">Give Review</button></div>
            <div className="cell"></div>
          </div>
        </div>
      </div>
      <div className="padding60"></div>
    </section>

  )
}

export default Reviews