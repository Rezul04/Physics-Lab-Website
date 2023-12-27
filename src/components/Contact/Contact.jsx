import React from 'react'
import "./Contact.css";

export const Contact = () => {
  return (
    <div className='contact'>
    <section>
        <div class="left-column">
            <h2>Get In Touch</h2>
            <p><strong>Phone:</strong><br/> +123 456 789</p>
            <p><strong>Email:</strong><br/> team_leader@example.com</p>
            <p><strong>Address:</strong><br/> Delhi Technological University,<br />
                    Shahbad Daulatpur,
                    Main Bawana Road,<br/>
                    Delhi-110042,
                    India<br/></p>
        </div>

        <div class="right-column">
            <img src="https://images5.alphacoders.com/100/1002716.jpg" alt="Team Image"/>
        </div>
    </section>

    <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d111935.94497282247!2d77.0359598!3d28.7494683!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390d0138a74f7da7%3A0xf09fad683c23bd5b!2sP4X9%2BQ8X%2C%20Bawana%20Rd%2C%20Delhi%20Technological%20University%2C%20Shahbad%20Daulatpur%20Village%2C%20Rohini%2C%20New%20Delhi%2C%20Delhi%2C%20110042!3m2!1d28.749493299999997!2d77.1183612!5e0!3m2!1sen!2sin!4v1699635584402!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>

    {/* <img id="footer-image" src="https://miro.medium.com/v2/resize:fit:1400/0*h5jLD-sR-38TtOTz" alt="Footer Image"/> */}

    </div>
  )
}