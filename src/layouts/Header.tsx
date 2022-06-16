import HeaderCartButton from "./HeaderCartButton";
import Menu from "./Menu";
import React from "react";
import classes from "./Header.module.css";

const Header: React.FC = () => {
    return (
        <div className={classes.header}>
            <header>
                <h1 className={classes.title}>react-ts</h1>
                <Menu />
            </header>
            <HeaderCartButton />
        </div>
    );
};

export default Header;
