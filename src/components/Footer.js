import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import DisclaimerModel from './Disclaimer';
import MdMail from 'react-ionicons/lib/MdMail';
import LogoTwitter from 'react-ionicons/lib/LogoTwitter';
import LogoGithub from 'react-ionicons/lib/LogoGithub';

const Footer = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
  <footer class="footer">
    <div class="row" >
      
      <div class="span-1-of-2">
        <ul class="footer-nav">
          <li><a href="#" >About</a></li>
          <li><a href="#" onClick={() => setModalShow(true)}>Disclaimer</a></li>
          <li><a href="#" >Subscribe</a></li>
          <DisclaimerModel show={modalShow} onHide={() => setModalShow(false)}/>
        </ul>
      </div>

      <div class="span-1-of-2">
        <ul class="social-icons">
          <li>
            <a href="#"><LogoTwitter fontSize="20px" color="#55acee" /></a>
          </li>
          <li>
            <a href="mailto:covidclean@valubees.co.uk"><MdMail fontSize="20px" color="#D44638" /></a>
          </li>
          <li>
            <a href="#"><LogoGithub fontSize="20px" color="#333" /></a>
          </li>
        </ul>
      </div>
    </div>

    <div>
      <p>Copyright &#169; 2020 by CovidClean. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default connect()(Footer)