import React from 'react';
import {Link} from "react-router-dom";

const Navegacion = ()=>{
    return(
        <div className="navegacion">
            <Link to="/">Home</Link>
            <Link to="/contribition">Colaboraciones</Link>
            <Link to="/topics" >Patrocinadores</Link>
           <Link to="/contacto">Contacto</Link>
        </div>
    );
}
 
export default Navegacion;