import React from 'react';

const Navegacion = ()=>{
    return(
        <div>
            <div className="navegacion">
            <a href="/">Inicio</a>
            <a href="/">Colaboraciones</a>
            <a href="/">Patrocinadores</a>
            <a href="/">Contacto</a>
        </div>
        <div>
                <form className='buscador'>
                    <input type='text' placeholder='busqueda' />
                </form>
                
        </div>
        </div>
    );
}
 
export default Navegacion;