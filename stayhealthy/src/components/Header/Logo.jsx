import React from 'react';
import '../../assets/logo.svg';

function Logo() {
    return(
        <div className="logo">
            <img src= {require('../../assets/logo.svg').default}
             alt="Logo" />
        </div>
    )
}


export default Logo