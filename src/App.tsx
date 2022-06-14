import NewTodo from "./components/NewTodo";
import Todo from "./models/todo";
import Todos from "./components/Todos";
import { useState } from "react";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);
        setTodos((prev) => [...prev, newTodo]);
    };

    const removeTodoHandler = (todoId: string) => {
        setTodos((prev) => {
            return prev.filter((todo) => todo.id !== todoId);
        });
    };
    return (
        <div className="App">
            <NewTodo onAddTodo={addTodoHandler} />
            <Todos items={todos} onRemoveTodo={removeTodoHandler} />
        </div>
    );
}

export default App;
