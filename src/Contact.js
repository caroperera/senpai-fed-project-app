import React from 'react';
import './Contact.css';

class Contact extends React.Component {

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div class="col col-xs-12 banner"></div>
          </div>
        </div>

        <div className="container-fluid form">
          <form onSubmit={this.handleSubmit}>
            <div className="titulo-ppal-form">¡Contactame!</div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label for="Nombre">Nombre</label>
                <input type="texto" className="form-control box" placeholder=""></input>
              </div>
              <div className="form-group col-md-4">
                <label for="Mail">Mail</label>
                <input type="texto" className="form-control box" id="Mail" placeholder=""></input>
              </div>
              <div className="form-group col-md-4">
                <label for="Telefono">Teléfono</label>
                <input type="texto" className="form-control box" id="Telefono" placeholder=""></input>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-12">
                <label for="Mensaje">Mensaje</label>
                <input type="texto" className="form-control box" id="Mensaje" placeholder=""></input>
              </div>
            </div>
            <button type="submit" className="btn btn-primary form">Enviar</button>
          </form>
        </div>
      </div>
    );
  }
}



export default Contact;