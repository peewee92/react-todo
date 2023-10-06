import "./App.css";

import { Card } from "flowbite-react";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      {/* <div className="app-wrap"> */}
        <Card>
          <div className="mb-4 flex items-center justify-between">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Latest Customers
            </h5>
          </div>
        </Card>
        <TodoList />
      {/* </div> */}
    </>
  );
}

export default App;
