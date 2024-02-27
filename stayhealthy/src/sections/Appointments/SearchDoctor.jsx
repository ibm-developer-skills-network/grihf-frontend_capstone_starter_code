import React from 'react'
import '../../assets/locally.svg';
import '../../assets/virtual.svg';
import '../../assets/magnifying.svg';
import '../../assets/location.svg';


const SearchDoctor = () => {
  return (
    <div id="search-doctor" className="choice">
        <button className="tablink active" data-target="search-doctor-tab-1">
            <img src= {require('../../assets/locally.svg').default}
             alt="Locally" />Locally
        </button>
        <button className="tablink inactive no-space" data-target="search-doctor-tab-2">
            <img src= {require('../../assets/virtual.svg').default}
            alt="Virtual" />Virtual
        </button>

        <fieldset className="search-doctor-tab shown" id="search-doctor-tab-1">
            <div className="input-container">
                <img src= {require('../../assets/magnifying.svg').default} alt="Magnifying-Glass" className="field-icon" />
                <input type="text" placeholder="Name, Speciality or Institution" className="line-after"/>
            </div>
            <img src= {require('../../assets/location.svg').default} alt="Location" className="field-icon" />
            <input type="text" placeholder="Where? (City, Zipcode or Address)" />
            <button className="button blue">Search</button>
        </fieldset>

        <fieldset className="search-doctor-tab hidden" id="search-doctor-tab-2">
            <div className="input-container">
                <img src= {require('../../assets/magnifying.svg').default} alt="Magnifying-Glass" className="field-icon" />
                <input type="text" placeholder="Name, Speciality or Institution" className="line-after"/>
            </div>
            <img src= {require('../../assets/location.svg').default} alt="Location" className="field-icon" />
            <input type="text" placeholder="How? (Phone or Video Call)" />
            <button className="button blue">Search</button>
        </fieldset>
    </div>


  )
}

export default SearchDoctor 