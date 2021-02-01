import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Route} from 'react-router-dom';
const axios = require('axios');

function App() {

  axios.get('http://localhost:8080/')
      .then(results =>{
        console.log(results)
      })
      .catch(error =>{
        console.log(error)
      });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Right. Let's connect this bitch.
        </p>
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

export default App;
