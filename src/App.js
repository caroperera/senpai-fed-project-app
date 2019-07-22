import React from 'react';
import './App.css';
import Header from './Header.js';
import HomeSection from './HomeSection.js';
import AboutMe from './AboutMe.js';
import Portfolio from './Portfolio.js';
import Articles from './Articles.js';
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

  goToAboutMe = () => {
    this.setState({
      section: 2
    });
  }

  goToPortfolio = () => {
    this.setState({
      section: 3
    });
  }

  goToArticles = () => {
    this.setState({
      section: 4
    });
  }

  goToContact = () => {
    this.setState({
      section: 5
    });
  }


  renderCurrentSection() {
    switch (this.state.section) {
      case 5:
        return (
          <Contact />
        );
      case 4:
        return (
          <Articles />
        );
      case 3:
        return (
          <Portfolio />
        );
      case 2:
        return (
          <AboutMe />
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
          goToAboutMe={this.goToAboutMe}
          goToPortfolio={this.goToPortfolio} 
          goToArticles={this.goToArticles}
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