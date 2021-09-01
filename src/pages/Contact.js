import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';


function Contact() {
    return (
      <div className="contact">
        <Navigation />
        <div className="contactContent">
          <div className="header"></div>

          <div className="contactBox">
            <h1>Contactez moi</h1>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Brest</span>
              </li>
              <li>
                <i className="fas fa-mobile-alt"></i>
                <CopyToClipboard text="0685424016">
                  <span 
                    className="clickInput" 
                    onClick={()=>
                      { alert('Téléphone copié')}}
                  >
                  06 85 42 40 16
                  </span>
                </CopyToClipboard>
                
              </li>
              <li>
                <i className="far fa-envelope"></i>
                <CopyToClipboard text="raph.lossec@gmail.com">
                  <span 
                    className="clickInput" 
                    onClick={()=>
                      { alert('Email copié')}}
                  >
                  raph.lossec@gmail.com
                  </span>
                </CopyToClipboard>
                
              </li>
            </ul>
          </div>

          <div className="socialNetwork">
          <ul>
                <a href="https://www.linkedin.com/in/raphael-lossec/" target="_blank" rel="noopenner noreferrer">
                  <h4>LinkedIn</h4>
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/S0Imyr" target="_blank" rel="noopenner noreferrer">
                  <h4>Github</h4>
                  <i className="fab fa-github"></i>
                </a>
            </ul>
          </div>
        </div>
      </div>
    );
  }

export default Contact;