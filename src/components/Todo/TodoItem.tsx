import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
    text: string;
    onRemoveTodo: () => void;
}> = (props) => {
    return (
        <div>
            <li className={classes.item}>
                <p>{props.text}</p>
                <button onClick={props.onRemoveTodo}>delete</button>
            </li>
        </div>
    );
};

export default TodoItem;
