import React from 'react';
import Navegacion from './Navegacion';
const Encabezado = (props) => {
    return(
        <div className="encabezado">
            <h1>Esto es un titulo que tiene como tema: {props.tema}</h1>
            <Navegacion/>
        </div>
    )
}
export default Encabezado;