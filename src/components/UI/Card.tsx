import { Props } from "../../models/commonProps";
import classes from "./Card.module.css";

const Card: React.FC<Props> = (props) => {
    return <div className={classes.card}>{props.children}</div>;
};

export default Card;
