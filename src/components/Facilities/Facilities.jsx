import React from 'react';
import './Facilities.css';
import facilitiesData from '../../../data/facilities.json'

// const facilitiesData = [
//   {
//     title: 'WITec Alpha 300R Deep UV Raman Microscopy (266nm)',
//     image: 'https://web.iitd.ac.in/~jpsingh/images/facilities/deep%20uv.jpg',
//     features: [
//       '266nm CW Solid State Laser from CryLas.',
//       '3D Raman Imaging with depth profile.',
//       'Fast Raman Imaging with motorized scanning stages.',
//       'WITec Software suite.',
//     ],
//   },
//   {
//     title: 'WITec Alpha 300R Deep UV Raman Microscopy (266nm)',
//     image: 'https://web.iitd.ac.in/~jpsingh/images/facilities/deep%20uv.jpg',
//     features: [
//       '266nm CW Solid State Laser from CryLas.',
//       '3D Raman Imaging with depth profile.',
//       'Fast Raman Imaging with motorized scanning stages.',
//       'WITec Software suite.',
//     ],
//   },
//   {
//     title: 'WITec Alpha 300R Deep UV Raman Microscopy (266nm)',
//     image: 'https://web.iitd.ac.in/~jpsingh/images/facilities/deep%20uv.jpg',
//     features: [
//       '266nm CW Solid State Laser from CryLas.',
//       '3D Raman Imaging with depth profile.',
//       'Fast Raman Imaging with motorized scanning stages.',
//       'WITec Software suite.',
//     ],
//   },
// ];

export const Facilities = () => {
  console.log(facilitiesData.facilities);
  
  return (
    <div className="container">
      <div className="yearBox1">Our Facilities</div>

      {facilitiesData.facilities.map((facility, index) => (
        <div key={index}>
          <h1>{facility.title}</h1>
          <div className="content-box">
            <div className="image-container">
              <img src={facility.image} alt="Equipment Image" />
            </div>
            {/* <div className="text-container"> */}
              {/* <p><strong>Key features of the equipment:</strong></p> */}
              {/* <ul>
                {facility.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul> */}
            {/* </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};
