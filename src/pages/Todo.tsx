import NewTodo from "../components/Todo/NewTodo";
import React from "react";
import Todos from "../components/Todo/Todos";

const Todo: React.FC = () => {
    return (
        <div>
            <NewTodo />
            <Todos />
        </div>
    );
};

export default Todo;
