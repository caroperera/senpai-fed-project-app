import React from 'react';
import './HomeSection.css';

class HomeSection extends React.Component {
  render() {
    return (
      <div>
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

        <div className="container-fluid about-me section">
          <div className="row">
            <div className="col col-12">
              <div className="container my-description">
                <div className="row">
                  <div className="col col-md-6 bg-full"></div>
                  <div className="col col-md-6 col-xs-12">
                    <div className="card my-description">
                      <h1>¡Hola!</h1>
                      <p>
                        Bienvenido a mi portfolio, acá podrás ver algunos de mis trabajos realizados en
                        los últimos
                        años. Los separé por rubro ya que fueron los principales pilares en los que me
                        desarrollé
                        profesionalmente:
                        <br></br>
                        • Corporativo
                        <br></br>
                        • Ecommerce
                        <br></br>
                        • Facultad
                        <br></br>
                        Espero que te guste y ante cualquier duda o información extra que desees recibir
                        quedo a las
                        órdenes.
                        <br></br>
                        <br></br>
                        ¡Que tengas un lindo día!
                        <br></br>
                        Caro</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default HomeSection;