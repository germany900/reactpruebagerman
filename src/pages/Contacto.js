import React from 'react';
import '../App.css';
import Encabezado from '../components/Encabezado';

function Contacto() {
  return (
    <div className="App">
      <header className="App-header">
        <Encabezado tema={"Contacto"} />
      </header>
    </div>
  );
}

export default Contacto;