import { Link } from "react-router-dom";
import classes from "./Menu.module.css";
const Menu = () => {
    return (
        <ul className={classes.menu}>
            <li>
                <Link to="/todo">TODO</Link>
            </li>
            <li>
                <Link to="/order">ORDER</Link>
            </li>
        </ul>
    );
};

export default Menu;
