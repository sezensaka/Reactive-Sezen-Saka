import React from 'react';
import logoimg from '../images/logo.png';

function Footer() {
  return (
    <footer>
      <div className="footercontent">
        <img src={logoimg} alt="Logo" />
        <p style={{ color: 'white', fontSize: 'small' }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A iste, distinctio architecto quas velit, sequi
          dolorem necessitatibus obcaecati perferendis sapiente, repudiandae consequatur voluptatum? Quaerat rerum quas
          fuga? Sit fugiat consequatur, odit architecto doloremque quas reprehenderit error. Sapiente et beatae
          perferendis.
        </p>
        <div className="d-flex justify-content-around">
          <div>
            <h3 id="information">Information</h3>
            <div className="linksinfo">
              <a href="#" className="infolink">About Us</a>
              <a href="#" className="infolink">Classes</a>
              <a href="#" className="infolink">Blog</a>
              <a href="#" className="infolink">Contact</a>
            </div>
          </div>
          <div>
            <h3 id="information">Helpful Links</h3>
            <div className="linksinfo">
              <a href="#" className="infolink">Services</a>
              <a href="#" className="infolink">Supports</a>
              <a href="#" className="infolink">Terms &amp; Conditions</a>
              <a href="#" className="infolink">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
