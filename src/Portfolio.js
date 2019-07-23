import React from 'react';
import './Portfolio.css';

class Portfolio extends React.Component {


  render() {
    return (


      <div className="container-fluid trabajos">
        <div className="titulo-ppal-form">Te presento algunos de mis trabajos:</div>
        <div className="row">

          <div className="col col-m-6 col-s-12">
            <div className="container portfolio">
              <div className="row">
                <div className="col col-md-12 bg-full1"></div>
              </div>
              <div className="row">
                <div className="col col-md-12 col-xs-12">
                  <div className="card portfolio">
                    <h5><b>CORPORATIVO / Logos</b></h5>
                    <br></br>
                    <p>
                      <b>Mis Beneficios</b>
                      <br></br>
                      Club privado de compras del banco Itaú. Actualmente trabajo como Diseñadora Ejecutiva de la marca y para este 2019 se relanzó con una nueva identidad y un nuevo sitio.

                      Se buscó modernizar el logo anterior y cambiar los colores para estar más alineados con la estética del banco en general.
                      <br></br>

                      www.misbeneficios.com.uy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col col-m-6 col-s-12">
            <div className="container portfolio">
              <div className="row">
                <div className="col col-md-12 bg-full2"></div>
              </div>
              <div className="row">
                <div className="col col-md-12 col-xs-12">
                  <div className="card portfolio">
                    <h5><b>CORPORATIVO / Logos</b></h5>
                    <br></br>
                    <p>
                      <b>On Move</b>
                      <br></br>
                      Surge ante la necesidad de crear un diseño para una marca deportiva. La misma no se llevó a cabo por cuestiones de importación pero el logo elegido para representar a la marca fue este. Un logo moderno y dinámico para representar esta marca deportiva.
                      </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col col-m-6 col-s-12">
            <div className="container portfolio">
              <div className="row">
                <div className="col col-md-12 bg-full3"></div>
              </div>
              <div className="row">
                <div className="col col-md-12 col-xs-12">
                  <div className="card portfolio">
                    <h5><b>CORPORATIVO / Logos</b></h5>
                    <br></br>
                    <p>
                      <b>Alquimia</b>
                      <br></br>
                      Se compone por jóvenes delegados de los hogares de Inau.
                      El objetivo del centro es romper esa barrera de prejuicios entre la sociedad y los chicos de Inau.
                      Se trabajan los valores de confianza, cambio, compañerismo, perserverancia, lucha, solidaridad, juventud, entre otros.              

                      Teniendo en cuenta el perfil de Alquimia, se elaboró un sistema de identidad que va acorde con su esencia y necesidades, partiendo de los conceptos de juventud, dinamismo y lucha.
                    </p>
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


export default Portfolio;