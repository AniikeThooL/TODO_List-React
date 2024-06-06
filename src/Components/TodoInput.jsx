import React, { useState } from "react";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  const handleAddTodo = () => {
    props.addlist(inputText);
    setInputText("");
  };

  return (
    <div>
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter-Your-Todo"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleEnterPress}
      />

      <button className="add-button" onClick={handleAddTodo}>
        +
      </button>
    </div>
  );
}

export default TodoInput;
