
import React from 'react';


const Encabezado = (props) => {
    const tema = props.tema;
    const subtitulo = props.subtitulo;
    return(
        <div>
            <h1> Esto es un titulo que tiene como tema: {tema}</h1>
            <h2> Esto es un subtitulo que tiene como tema {subtitulo}</h2>
        </div>
    );
}

export default Encabezado;

