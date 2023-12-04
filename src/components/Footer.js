// Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {

  return (

    <div className='footer-container'>
    <div className="footer">
      <div className="details">
        <div id="contact" className="contact-us">
          <h2>Contact Us on Below Information</h2>
          <span>Email: kineticdentallab@gmail.com</span>
          <br />
          <span>Whatsapp or Call: 8800229902</span>
          <br />
          <address>
            Sector 122 Noida, Uttar Pradesh 201316 India
          </address>
        </div>

        <div className="business-hours">
          <h2>Business Hours</h2>
          <ul>
            <li>Mon: 10:00 AM – 10:00 PM</li>
            <li>Tue: 10:00 AM – 10:00 PM</li> 
            <li>Wed: 10:00 AM – 10:00 PM</li>
            <li>Thu: 10:00 AM – 10:00 PM</li>
            <li>Fri: 10:00 AM – 10:00 PM</li>
            <li>Sat: 10:00 AM – 10:00 PM</li>
            <li>Sun: 10:00 AM – 10:00 PM</li>
          </ul>
        </div>
      </div>

      <div>
        &#169; 2023 Kinetic Dental Lab . All rights reserved
      </div>
    </div>
    </div>
  );
}

export default Footer;
