import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/Burgerbuilder/Burgerbuilder';

class App extends Component {
  render() {
    return (
      <div className="App">


        <Layout>
          <p>Layout Component</p>
          <BurgerBuilder></BurgerBuilder>
        </Layout>
      </div>
    );
  }
}

export default App;
