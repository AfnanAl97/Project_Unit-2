import React, { Component } from 'react';
import Footer from './components/Footer';
import Header from "./components/Header";


class App extends React.Component {
  render() {
    return (
      <div className="App">

        <Header />
        <Footer  items/>
      </div>
    );
  }
}
export default App;
