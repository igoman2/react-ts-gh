import HeaderCartButton from "./HeaderCartButton";
import Menu from "./Menu";
import React from "react";
import classes from "./Header.module.css";

interface IHeaderProps {
    onClick: () => void;
}
const Header: React.FC<IHeaderProps> = (props) => {
    return (
        <div className={classes.header}>
            <header>
                <h1 className={classes.title}>react-ts</h1>
                <Menu />
            </header>
            <HeaderCartButton onClick={props.onClick} />
        </div>
    );
};

export default Header;
