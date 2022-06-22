import React, { useContext, useRef } from "react";

import Button from "../UI/Button";
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
        todoTextInputRef.current!.value = "";
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
                <Button text="추가" className="sm" />
            </Card>
        </form>
    );
};

export default NewTodo;
