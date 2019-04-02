import React, { Component } from 'react';
import logo from './logo.svg';
import FormInput from './components/FormInput'
import Form from './components/Form'
import PageWithForm from './components/PageWithForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PageWithForm/>
        </header>
      </div>
    );
  }
}

export default App;
