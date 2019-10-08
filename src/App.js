import React from 'react';
import logo from './logo.svg';
import './App.css';
import Encabezado from './components/Encabezado';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Encabezado tema={"Tecnología"}  subtitulo={"React"}/>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
