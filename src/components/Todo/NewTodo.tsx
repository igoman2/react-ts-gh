import React, { useContext, useRef } from "react";

import Card from "../UI/Card";
import { TodosContext } from "../../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;
        if (enteredText.trim().length === 0) {
            return;
        }

        todosCtx.addTodo(enteredText);
    };
    return (
        <form
            id="todo"
            className={classes.form}
            action=""
            onSubmit={submitHandler}
        >
            <Card>
                <label htmlFor="text">Todo text</label>
                <input type="text" id="text" ref={todoTextInputRef} />
                <button>Add Todo</button>
            </Card>
        </form>
    );
};

export default NewTodo;
