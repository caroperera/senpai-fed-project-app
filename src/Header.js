import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="container-fluid navbar" id="myNavbar">
        <div className="row">
          <button type="button" onClick={this.props.goToHomeSection} className="btn btn-dark">Inicio</button>
          <button type="button" onClick={this.props.goToPortfolio} className="btn btn-dark">Trabajos</button>
          <button type="button" onClick={this.props.goToContact} className="btn btn-dark">Contacto</button>
          <a href="javascript:void(0);" className="icon" onclick="myFunction()">
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </div>
      );
  }
}


export default Header;
