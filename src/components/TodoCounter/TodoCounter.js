import React from "react";
import './TodoCounter.css';


function TodoCounter({total, completed}) {
    return (
        <div className="TodoCounter">
            <h2>Has completado {completed} de {total}</h2>
        </div>
    );
}

export {TodoCounter};