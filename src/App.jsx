import "./App.css";

import { Card } from "flowbite-react";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
        <Card className="max-w-lg mx-auto h-full">
          <div className="mb-4 flex items-center justify-between">
            <TodoList />
          </div>
        </Card>
    </>
  );
}

export default App;
