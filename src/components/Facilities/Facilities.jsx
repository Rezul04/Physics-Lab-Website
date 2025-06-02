import React from 'react';
import './Facilities.css';
import facilitiesData from '../../../data/facilities.json';

export const Facilities = () => {
  return (
    <div className="container">
      <div className="yearBox1">Our Facilities</div>

      <div className="facilities-grid">
        {facilitiesData.facilities.map((facility, index) => (
          <div className="content-box" key={index}>
            <div className="image-container">
              <img src={facility.image} alt={`Facility ${index + 1}`} />
            </div>
            <h2>{facility.title}</h2>
            <p className="description">{facility.description}</p>
            {/* Uncomment below if you want to show features */}
            {/* <div className="text-container">
              <ul>
                {facility.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};
