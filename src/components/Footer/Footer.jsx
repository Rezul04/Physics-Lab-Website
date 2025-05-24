import React from 'react';
import './footer.css';

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'Research', href: '#' },
  { label: 'News', href: '#' },
  { label: 'People', href: '#' },
  { label: 'Alumni', href: '#' },
  { label: 'Facilities', href: '#' },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        
        <div className="column">
          <img src="src/assets/dtu-logo.png" alt="DTU Logo" />
        </div>

        <div className="column">
          <div className="column-heading">Quick Links</div>
          <ul className="quick-links">
            {quickLinks.map((link, index) => (
              <li key={index} className="footer-links">
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="column">
          <div className="column-heading">Address</div>
          <p className="footer-content2">
            Delhi Technological University,<br />
            Shahbad Daulatpur,<br />
            Main Bawana Road,<br />
            Delhi-110042, India<br /><br />
            Email: bhartisingh@dtu.ac.in <br />amdldtu@gmail.com
          </p>
        </div>

        <div className="column">
          <div className="column-heading">Location</div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d111935.94497282247!2d77.0359598!3d28.7494683!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390d0138a74f7da7%3A0xf09fad683c23bd5d!2sP4X9%2BQ8X%2C%20Bawana%20Rd%2C%20Delhi%20Technological%20University%2C%20Shahbad%20Daulatpur%20Village%2C%20Rohini%2C%20New%20Delhi%2C%20Delhi%2C%20110042!3m2!1d28.749493299999997!2d77.1183612!5e0!3m2!1sen!2sin!4v1699635584402!5m2!1sen!2sin"
              width="100%" height="100%" allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DTU Map"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
