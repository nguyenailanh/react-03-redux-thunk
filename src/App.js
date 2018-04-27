import React, { Component } from 'react';
import './App.css';

import Header from './containers/Header'
import Footer from './containers/Footer'
import List from './containers/List'


class App extends Component {
  render() {
    return (
      <section className="todo-app">
        <Header/>
        <section className="main">
          <List/>
        </section>
        <Footer/>
      </section>
    );
  }
}

export default App;
