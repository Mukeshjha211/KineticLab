// Testimonials.js

import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <>    <div className="testonomial-header">
    <h1>TESTIMONIALS</h1>
</div>

<div className='testimonials-container'>

<div className="testimonials" id='about'>
    <div className="testimonial">
        <p>"Exceptional craftsmanship and attention to detail! Kinetic Dental Lab has consistently delivered
            high-quality dental restorations, showcasing their expertise with every project. I highly recommend
            their services."</p>
        <span className="testimonial-author">-Vivek Kumar</span>
    </div>

    <div className="testimonial">
        <p>"Kinetic Dental Lab has been my go-to partner for dental solutions. Their 5+ years of experience
            truly reflect in their work. The precision, innovation, and commitment to excellence set them apart.
            An excellent choice for dental professionals."</p>
        <span className="testimonial-author">-Ravi dubey</span>
    </div>

    <div className="testimonial">
        <p>"Outstanding finishing and top-notch quality! I've been a satisfied customer of Kinetic Dental Lab
            for years. The team's dedication to providing personalized and comfortable dental appliances is
            unmatched. I strongly recommend their services."</p>
        <span className="testimonial-author">-Gaurav Bharti</span>
    </div>
    </div>
</div>
</>



  );
}

export default Testimonials;
