import React from 'react';
import './Footer.css';

class Footer extends React.Component {


  render() {
    return (
      <div className="container-fluid footer">
        <div className="row">
          <div className="col col-3">
          </div>

          <div className="col col-3">
            <div className="titulo-ppal">Links de interés</div>
            <a href="https://www.medium.com">Medium</a>
            <br></br>
            <a href="https://www.publisuites.com/blog/">Publisuites</a>
            <br></br>
            <a href="https://uxdesign.cc/">UX Design</a>
            <br></br>
          </div>

          <div className="col col-3">
            <div className="titulo-ppal">Redes Sociales</div>
            <a href="https://www.facebook.com">Facebook</a>
            <br></br>
            <a href="https://www.instagram.com/caro.perera">Instagram</a>
            <br></br>
            <a href="https://linkedin.com">Linkedin</a>
            <br></br>
          </div>

          <div className="col col-3">
          </div>

        </div>
      </div>
    );
  }
}


export default Footer;