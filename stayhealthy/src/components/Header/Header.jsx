import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header>
        <div className="flexbox width1400 padding20 center between">
            <div className="logo">
                <Logo />
            </div>
            
            <section id="navigation" class="flexbox">
                <Navigation />
            </section>
        </div>
    </header>
    )
}

export default Header