import React from 'react';

function Contact() {
  return (
    <article>
      <div id="contact-us">
        <div>
          <div className="" style={{ color: 'transparent' }}></div>
          <h2 className="text-center head2" id="rch3">
            CONTACT US
          </h2>
          <div className="hr mb-5 mt-3"></div>
          <p className="text-center article2p2">
            Lorem ipsum is not a simply random text. It has roots in a piece of classical at <br />
            Hampden-Sydney College.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="container mt-5">
                <div className="row">
                  <div className="col-6 numberadress">
                    <h3>Mobile Number</h3>
                    <p>+135 773 321 4442</p>
                  </div>
                  <div className="col-6 numberadress">
                    <h3>Email Address</h3>
                    <p>demo@demo.com</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 id="appointment">Make An Appointment</h3>
                <div id="inputarea">
                  <input className="appinput" type="text" placeholder="Your Name" /><br />
                  <input className="appinput" type="email" placeholder="Your Email" /><br />
                  <textarea className="text-area" name="" id="" cols="10" rows="7">Your Message</textarea>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mt-5">
              <div style={{ width: '100%' }}>
                <iframe
                  title="Google Map"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/">gps devices</a>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Contact;