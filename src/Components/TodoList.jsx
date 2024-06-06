import React from "react";

function TodoList(props) {
  const handleDelete = () => {
    props.DeleteItem(props.index);
  };

  return (
    <li className="list-item">
      {props.item}
      <span className="icons">
        <i
          className="fa-solid fa-trash-can icon-delete"
          onClick={handleDelete}
        ></i>
      </span>
    </li>
  );
}

export default TodoList;
