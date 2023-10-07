import "./index.css";

import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

import { Button } from 'flowbite-react';
import { useState } from "react";

function TodoItem({ todo, remove, update, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);

  const handleClick = id => {
    console.log('evt.target.id',id)
    remove(id);
  };
  const toggleFrom = () => {
    setIsEditing(!isEditing);
  };
  const handleUpdate = evt => {
    evt.preventDefault();
    update(todo.id, task);
    toggleFrom();
  };
  const handleChange = evt => {
    setTask(evt.target.value);
  };
  const toggleCompleted = evt => {
    console.log('toggleCompleted', evt.target)
    toggleComplete(evt.target.id);
  };

  let result;
  if (isEditing) {
    result = (
      <div className="Todo">
        <form className="Todo-edit-form" onSubmit={handleUpdate}>
          <input onChange={handleChange} value={task} type="text" className="mr-2 shadow appearance-none border rounded text-gray-800" />
          <Button type="submit">Save</Button>
        </form>
      </div>
    );
  } else {
    result = (
      // className="Todo"  className={todo.completed ? "Todo-task completed" : "Todo-task"}
      <div className="divide-y divide-gray-200 dark:divide-gray-700 flex items-center justify-between"> 
        <li
          id={todo.id}
          onClick={toggleCompleted}
          className={`py-3 sm:py-4 ${todo.completed ? "Todo-task completed" : "Todo-task"}`}
          
        >
          {todo.task}
        </li>
        <div className="border-none">
          <button onClick={toggleFrom} className="mr-2">
            <EditOutlined  />
          </button>
          <button onClick={() => {handleClick(todo.id)}}>
             <DeleteOutlined  />
          </button>
        </div>
      </div>
    );
  }
  return result;
}

export default TodoItem;
