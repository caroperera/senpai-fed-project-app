import React from 'react';
import './AboutMe.css';


class AboutMe extends React.Component {
  render() {
    return (
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
    );
  }
}

export default AboutMe;
