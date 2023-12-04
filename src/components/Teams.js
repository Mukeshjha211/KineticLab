// Testimonials.js

import React from 'react';
import './Teams.css';

const Teams = () => {
  return (
    <>    <div className="testonomial-header">
    <h1>MEET OUR TEAM</h1>
</div>

<div className='testimonials-container'>

<div className="testimonials">
    <div className="testimonial">
       <img src='https://raw.githubusercontent.com/Mukeshjha211/TeamLogo/main/photo_3_2023-12-03_17-07-34.jpg'></img>
        <span className="testimonial-author">-Ganesh Singh(Owner & Technician)</span>
    </div>

    <div className="testimonial">
        <img src='https://raw.githubusercontent.com/Mukeshjha211/TeamLogo/main/photo_1_2023-12-03_17-07-34.jpg'>
        </img>
        <span className="testimonial-author">-Ballu Singh(Co-Technician)</span>
    </div>

    <div className="testimonial">
       <img src='https://raw.githubusercontent.com/Mukeshjha211/TeamLogo/main/photo_2_2023-12-03_17-07-34.jpg'></img>
        <span className="testimonial-author">-Mukesh Jha(Tech Lead)</span>
    </div>
    </div>
</div>
</>



  );
}

export default Teams;
