import React from 'react';
import './HomeSection.css';

class HomeSection extends React.Component {
  render() {
    return (
      
      <div id="carouselPrincipal" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselPrincipal" data-slide-to="0" className="active"></li>
          <li data-target="#carouselPrincipal" data-slide-to="1"></li>
          <li data-target="#carouselPrincipal" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="assets/header3.jpg" alt="First slide">
                </img>
            <div className="carousel-item">
              <img className="d-block w-100" src="assets/header2.jpg" alt="Second slide">
                </img>
              <div className="carousel-item">
                <img className="d-block w-100" src="assets/header1.jpg" alt="Third slide">
                </img>
              </div>
              <a className="carousel-control-prev" href="#carouselPrincipal" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselPrincipal" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      );
  }
}


export default HomeSection;
