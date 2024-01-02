import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="footer-content">
            {/* <div className="column">
                <img src="http://intaffairs.dtu.ac.in/dtu-logo.png" alt="Logo" />
            </div> */}
            <div className='w-50 mx-auto'>
            <h4 className="footertext text-center">&copy; Physics Department DTU </h4>
            <div className="column-heading text-center">Quick Links</div>
            <ul className="quick-links d-flex justify-content-around">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Research</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">People</a></li>
                    <li><a href="#">Alumni</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            {/* <div className="column">
                <div className="column-heading">Quick Links</div>
                <ul className="quick-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Research</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">People</a></li>
                    <li><a href="#">Alumni</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="column">
                <div className="column-heading">Address</div>
                <p>Delhi Technological University,<br />
                    Shahbad Daulatpur,<br/>
                    Main Bawana Road,<br/>
                    Delhi-110042,<br/>
                    India<br/>
                   

                    Phone: 123-456-7890<br />
                    Email: info@example.com</p>
            </div> */}
            {/* <div className="column">
                <div className="column-heading">Location</div>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d111935.94497282247!2d77.0359598!3d28.7494683!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390d0138a74f7da7%3A0xf09fad683c23bd5d!2sP4X9%2BQ8X%2C%20Bawana%20Rd%2C%20Delhi%20Technological%20University%2C%20Shahbad%20Daulatpur%20Village%2C%20Rohini%2C%20New%20Delhi%2C%20Delhi%2C%20110042!3m2!1d28.749493299999997!2d77.1183612!5e0!3m2!1sen!2sin!4v1699635584402!5m2!1sen!2sin"
                        width="100%" height="100%" allowFullScreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div> */}
        </div>
    </div>
    </>
  )
}

export default Footer
