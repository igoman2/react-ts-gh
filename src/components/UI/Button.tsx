import React from "react";
import classes from "./Button.module.css";

interface IButtonProps {
    text: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    className?: string;
}

const Button: React.FC<IButtonProps> = (props) => {
    return (
        <div>
            <button
                className={`${classes.button} ${classes[`${props.className}`]}`}
                onClick={props.onClick}
            >
                {props.text}
            </button>
        </div>
    );
};

export default Button;
