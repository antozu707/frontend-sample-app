import React from "react";

import { infoPracticas } from '../components/infoPracticas'

function Practicas () {
    return (
        <div className="practicasContainer">
            <h1>Mis prácticas</h1>
            <ul className='practicasList'>
                {infoPracticas.map((val,key) => {
                    return (
                        <li
                        key={key} 
                        className='row'>
                            <div id='tipo'>{val.tipo}</div>
                            <div id='estado'>{val.estado}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Practicas