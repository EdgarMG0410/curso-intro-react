import React from "react";
import { TodoCounter } from '../TodoCounter/TodoCounter'
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoHeader } from '../TodoHeader/TodoHeader';
import './AppUI.css';

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
  }) {
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
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
          </div>
          <CreateTodoButton/>
      </React.Fragment>
    );
  }

  export {AppUI};