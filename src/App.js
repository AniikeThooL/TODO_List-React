import React, { useState } from "react";
import "./App.css";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

const App = () => {
  const [listTodo, setListTodo] = useState([]);
  let addlist = (inputText) => {
    setListTodo([...listTodo, inputText]);
  };
  const DeleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };
  return (
    <div className="main-component">
      <div className="center-container">
        <TodoInput addlist={addlist} />
        <h1 className="app-heading">TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <TodoList
              key={i}
              index={i}
              item={listItem}
              DeleteItem={DeleteListItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
