import React, { useState } from 'react';
import './SampleWorks.css';

const SampleWorks = () => {
  const sampleImages = [
    // List of image URLs
    "https://raw.githubusercontent.com/Mukeshjha211/Sample-Works/main/photo_9_2023-12-02_23-07-57.jpg",
    "https://raw.githubusercontent.com/Mukeshjha211/Sample-Works/main/photo_7_2023-12-02_23-07-57.jpg",
    "https://raw.githubusercontent.com/Mukeshjha211/Sample-Works/main/photo_6_2023-12-02_23-07-57.jpg",
    "https://raw.githubusercontent.com/Mukeshjha211/Sample-Works/main/photo_5_2023-12-02_23-07-57.jpg",
    "https://raw.githubusercontent.com/Mukeshjha211/Sample-Works/main/photo_4_2023-12-02_23-07-57.jpg",
    "https://raw.githubusercontent.com/Mukeshjha211/Sample-Works/main/photo_3_2023-12-02_23-07-57.jpg",
    "https://raw.githubusercontent.com/Mukeshjha211/Sample-Works/main/photo_1_2023-12-02_23-07-57.jpg",
    "https://raw.githubusercontent.com/Mukeshjha211/Sample-Works/main/photo_10_2023-12-02_23-07-57.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [disable, setdisable] = useState(true)

  const changeImage = (offset) => {
    const newIndex = currentIndex + offset;

    if (newIndex >= 0 && newIndex < sampleImages.length) {
      setCurrentIndex(newIndex);
    }

  };

  return (
    <>
      <div className="testonomial-header">
        <h1>SAMPLE WORKS</h1>
      </div>

      <div className='testimonials-container'>
        <div className="sample-work-container">
          <button className="prev-btn" onClick={() => changeImage(-1)} disabled={currentIndex === 0}>❮</button>
          <div className="sample-work">
            <img src={sampleImages[currentIndex]} alt={`sample-work-${currentIndex}`} />
          </div>
          <button
            className="next-btn"
            onClick={() => changeImage(1)}
            disabled={currentIndex === sampleImages.length - 1}
          >
            ❯
          </button>
        </div>
      </div>
    </>
  );
}

export default SampleWorks;
