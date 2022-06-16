import React, { useContext } from "react";

import Card from "../UI/Card";
import TodoItem from "./TodoItem";
import { TodosContext } from "../../store/todos-context";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext);
    return (
        <ul className={classes.todos}>
            <Card>
                {todosCtx.items.map((item) => (
                    <TodoItem
                        text={item.text}
                        onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
                        key={item.id}
                    />
                ))}
            </Card>
        </ul>
    );
};

export default Todos;
