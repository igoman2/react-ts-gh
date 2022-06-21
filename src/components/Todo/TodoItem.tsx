import Button from "../UI/Button";
import React from "react";
import classes from "./TodoItem.module.css";

interface ITodoItemProps {
    text: string;
    onRemoveTodo: () => void;
}

const TodoItem: React.FC<ITodoItemProps> = (props) => {
    return (
        <div>
            <li className={classes.item}>
                <p>{props.text}</p>
                <Button
                    onClick={props.onRemoveTodo}
                    text="삭제"
                    className="sm"
                />
            </li>
        </div>
    );
};

export default TodoItem;
