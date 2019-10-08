import React from 'react';
import '../App.css';
import Encabezado from '../components/Encabezado';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Encabezado tema={"Home Tecnología"} />
      </header>
    </div>
  );
}

export default App;