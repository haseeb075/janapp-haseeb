import React from "react";

function TodoItem(props) {
  return (
    <div>
      <div className="todo-list">
        <div className="todo-item">
          <input type="checkbox" />
          <span>value1</span>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
