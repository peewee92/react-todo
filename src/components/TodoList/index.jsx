import "./index.css";

import { GenNonDuplicateID } from '../../util';
import NewTodoForm from "../NewTodoForm";
import TodoItem from "../TodoItem";
import { useState } from "react";

const INIT_TODO = [
    { id: GenNonDuplicateID(), task: "task 1", completed: false },
    { id: GenNonDuplicateID(), task: "task 2", completed: true }
]

function TodoList() {
  const [todos, setTodos] = useState(INIT_TODO);

  const create = newTodo => {
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const remove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const update = (id, updtedTask) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updtedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleComplete = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const todosList = todos.map(todo => (
    <TodoItem
      toggleComplete={toggleComplete}
      update={update}
      remove={remove}
      key={todo.id}
      todo={todo}
    />
  ));

  return (
    <div className="TodoList">
      <h1>
        Todo List
      </h1>
      <NewTodoForm createTodo={create} />
      <ul>{todosList}</ul>
    </div>
  );
}

export default TodoList;
