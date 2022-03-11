import React from 'react';
import './App.css';
import {TodoCounter} from './TodoCounter';

const todos =[
  { text: 'Cortar cebolla', completed: false},
  { text: 'Tomar curso de intro a React', completed: false},
  { text: 'Llorar con la llorona', completed: false}
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
    

    {/* <TodoSearch /> */}
    <input placeholder='wait...'/>
  {/*   <TodoList>
      {todos.map(todo => ()
        <TodoItem/>
      )}
    </TodoList> */}
  {/* <CreateTodoButton/> */}
  <button>+</button>
    
    </React.Fragment>
  );
}

export default App;
