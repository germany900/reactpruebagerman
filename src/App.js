import React from 'react';
import logo from './logo.svg';
import './App.css';
import Encabezado from './components/Encabezado';
import Subtitulo from './components/Subtitulo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Encabezado tema={'Ciencias'} />
        <Subtitulo titulo={'Ciencias Sociales'} />

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
          Learn React Now!
        </a>
      </header>
    </div>
  );
}

export default App;
