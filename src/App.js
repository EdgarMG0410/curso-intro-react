import React from 'react';

const todos =[
  { text: 'Cortar cebolla', completed: false},
  { text: 'Tomar curso de intro a React', completed: false},
  { text: 'Llorar con la llorona', completed: false}
];

function App() {
  return (
    <React.Fragment>
      <TodoHeader/>
      <div className="App-content">
        <TodoCounter/>
        <TodoSearch />
          <TodoList>
            {todos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
              />
            ))}
          </TodoList>
        </div>
        <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
