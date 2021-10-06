import React from 'react';
import './Main.scss';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Footer />
      </>
    );
  }
}

export default Main;
