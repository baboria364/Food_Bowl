import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
  return (
    
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <hr />
          <div className="col">
            <h4>COMPANY</h4>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Team</li>
              <li>Mission</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>LEGAL</h4>
            <ul className="list-unstyled">
              <li>Terms & Conditions</li>
              <li>Privacy & Policy</li>
              <li>Help & Support</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>We Deliver at</h4>
            <ul className="list-unstyled">
              <li>Bengaluru</li>
              <li>Hyderabad</li>
              <li>Chennai</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Hungry Point | All rights reserved |
            Terms Of Service | Privacy <br/> <br/>
            <a href="https://www.facebook.com/" target='_blank'><FacebookIcon /></a>
            <a href="https://twitter.com/" target='_blank'><TwitterIcon /></a>
            <a href="https://www.instagram.com/" target='_blank'><InstagramIcon /></a>
            <a href="https://www.youtube.com/" target='_blank'><YouTubeIcon /></a>
           

          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;