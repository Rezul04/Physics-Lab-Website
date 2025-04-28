import React from 'react';
import './Facilities.css';

const facilitiesData = [
  {
    title: 'WITec Alpha 300R Deep UV Raman Microscopy (266nm)',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    features: [
      '266nm CW Solid State Laser from CryLas.',
      '3D Raman Imaging with depth profile.',
      'Fast Raman Imaging with motorized scanning stages.',
      'WITec Software suite.',
    ],
  },
  {
    title: 'High Precision 3D Printer',
    image: 'https://web.iitd.ac.in/~jpsingh/images/facilities/deep%20uv.jpg',
    features: [
      'Ultra-fine resolution printing.',
      'Multi-material support.',
      'Auto-bed leveling system.',
      'Intelligent filament detection.',
    ],
  },
  {
    title: 'Scanning Electron Microscope (SEM)',
    image: 'https://web.iitd.ac.in/~jpsingh/images/facilities/deep%20uv.jpg',
    features: [
      'High-resolution imaging up to nanometer scale.',
      'Variable pressure mode.',
      'Energy-dispersive X-ray spectroscopy (EDX) integrated.',
      'Real-time 3D surface analysis.',
    ],
  },
];

export const Facilities = () => {
  return (
    <div className="container">
      <div className="yearBox1">Our Facilities</div>

      {facilitiesData.map((facility, index) => (
        <div key={index} className="content-box">
          <div className="image-container">
            <img src={facility.image} alt="Facility" />
          </div>
          <div className="text-container">
            <h2 className="facility-title">{facility.title}</h2>
            <p><strong>Key Features:</strong></p>
            <ul>
              {facility.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
