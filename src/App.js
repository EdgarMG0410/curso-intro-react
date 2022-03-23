import React from 'react';

const defaultTodos =[
  { text: 'Cortar cebolla', completed: false},
  { text: 'Tomar curso de intro a React', completed: false},
  { text: 'Llorar con la llorona', completed: false},
];

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1){
    searchedTodos = todos;
  }else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  return (
    <React.Fragment>
      <TodoHeader/>
      <div className="App-content">
        <TodoCounter
          total={totalTodos}
          completed={completedTodos}
        />
        <TodoSearch 
          searchValue = {searchValue}
          setSearchValue = {setSearchValue}
        />
          <TodoList>
            {searchedTodos.map(todo => (
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
