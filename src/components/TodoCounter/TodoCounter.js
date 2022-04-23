import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import './TodoCounter.css';


function TodoCounter({total, completed}) {
 const { totalTodos, completedTodos } = React.useContext(TodoContext);

    return (
        <div className="TodoCounter">
            <h2>Has completado {completedTodos} de {totalTodos}</h2>
        </div>
    );
}

export {TodoCounter};