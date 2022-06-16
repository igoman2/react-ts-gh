import React from "react";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton: React.FC = () => {
    return (
        <div className={classes["button-wrapper"]}>
            <div className={classes.button}>Cart</div>
        </div>
    );
};

export default HeaderCartButton;
