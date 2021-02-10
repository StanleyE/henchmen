import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Route} from 'react-router-dom';
const axios = require('axios');


// import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[0],
    }

  }

  componentDidMount() {
    axios.get('http://localhost:8080/')
      .then(results =>{
        console.log(results)
        // let mimic = Array.from(this.state.data);
        let mimic = results.data[0];
        console.log("mimic: " + mimic);
        // this.setState({
        //   data:mimic,
        // })
      })
      .catch(error =>{
        console.log(error)
      });
  }

  // componentWillReceiveProps(nextProps) {}

  // shouldComponentUpdate(nextProps, nextState) {}

  // componentWillUpdate(nextProps, nextState) {}

  // componentDidUpdate(prevProps, prevState) {}

  // componentWillUnmount() {}


  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Right. Let's connect this bitch. {this.state.data} !</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Route exact path='/'/>
    </div>
    );
  }
}

// App.propTypes = {};

export default App;

