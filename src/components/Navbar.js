// components/NavBar.js
import React from 'react';
import '../components/Navbar.css'

const NavBar = () => {

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrolltoAbout=()=>{
    const AboutSection = document.getElementById('about');
    AboutSection.scrollIntoView({behavior:'smooth'})
  }
  return (
    <>

<div className='container'>
<div className="nav-bar">

            <div className="logo">
                {/* <img src="https://raw.githubusercontent.com/Mukeshjha211/KineticLogo/main/kineticLogo.jpg"
                    alt="Kinetic Dental Lab Logo"> */}
                        <img src="https://raw.githubusercontent.com/Mukeshjha211/KineticLogo/main/kineticLogo.jpg"  alt="Kinetic Dental Lab Logo"></img>
            </div>
            <a href="#">Home</a>
            <a onClick={scrollToContact} style={{ cursor: 'pointer' }}>Contact Us</a>
            <a onClick={scrolltoAbout} style={{cursor:'pointer'}}>About</a>
        </div>

</div>
        
        </>
  );
}

export default NavBar;