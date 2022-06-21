import React from "react";
import classes from "./HeaderCartButton.module.css";

interface IHeaderCartButtonProps {
    onClick: () => void;
}
const HeaderCartButton: React.FC<IHeaderCartButtonProps> = (props) => {
    return (
        <div className={classes["button-wrapper"]}>
            <button className={classes.button} onClick={props.onClick}>
                Cart
            </button>
        </div>
    );
};

export default HeaderCartButton;
