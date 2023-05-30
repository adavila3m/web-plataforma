import React from "react";
import {Link} from "react-router-dom"


export default function Landing(){
    return (
        <div>
            <h1>Bienvenidos!</h1>
            <Link to="/home">
                <button> Hola Mundo</button>
            </Link>
        </div>
    )
}