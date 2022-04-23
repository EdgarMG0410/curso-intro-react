import React, { useContext } from "react";
import { TodoContext } from '../TodoContext/TodoContext';



function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    }=React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return(
        <form onSubmit={onSubmit}>
            <label>...</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Que vas a hacer"
            />
            <div className="botones">
                <button 
                    onClick={onCancel}
                        type="button"
                    >
                    Cancelar
                </button>
                <button
                        type="submit"
                    >
                    Guardar
                </button>
            </div>
        </form>

    );
}

export { TodoForm };