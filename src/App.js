import React from 'react';
import './App.css';
import Header from './Header.js';
import HomeSection from './HomeSection.js';
import Portfolio from './Portfolio.js';
import Contact from './Contact.js';
import Footer from './Footer.js';
  

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      section: 1,
    };
  }


  goToHomeSection = () => {
    this.setState({
      section: 1
    });
  }


  goToPortfolio = () => {
    this.setState({
      section: 3
    });
  }


  goToContact = () => {
    this.setState({
      section: 4
    });
  }


  renderCurrentSection() {
    switch (this.state.section) {
      case 4:
        return (
          <Contact />
        );
      case 3:
        return (
          <Portfolio />
        );
      
      case 1:
      default:
        return <HomeSection />;
    }
  }

  render() {
    return (
      <div>
        <Header
          goToHomeSection={this.goToHomeSection}
          goToPortfolio={this.goToPortfolio} 
          goToContact={this.goToContact} 
        />
        <main>

          {this.renderCurrentSection()}

        </main>

        <Footer />
      </div>
    );
  }
}



export default App;