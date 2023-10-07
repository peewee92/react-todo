/* eslint-disable react/prop-types */
import "./index.css";

import { Button } from 'flowbite-react';
import { GenNonDuplicateID } from '../../util';
import { useReducer } from "react";

function NewTodoForm({ createTodo }) {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      task: "",
    }
  );

  const handleChange = (evt) => {
    setUserInput({ [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newTodo = { id: GenNonDuplicateID(), task: userInput.task, completed: false };
    createTodo(newTodo);
    setUserInput({ task: "" });
  };

  return (
    <form
      className="flex"
      onSubmit={handleSubmit}
    >
        <input
          value={userInput.task}
          onChange={handleChange}
          id="task"
          type="text"
          name="task"
          placeholder="please input"
          className="mr-2 pl-2 shadow appearance-none border rounded text-gray-800"
        />
        <Button type="submit">Add Todo</Button>
    </form>
  );
}

export default NewTodoForm;
