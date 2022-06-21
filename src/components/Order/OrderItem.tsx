import React, { useContext } from "react";

import Button from "../UI/Button";
import Item from "../../models/order";
import { OrdersContext } from "../../store/orders-context";
import classes from "./OrderItem.module.css";

interface IOrderItemProps {
    item: Item;
    type: string;
}

const OrderItem: React.FC<IOrderItemProps> = (props) => {
    const orderCtx = useContext(OrdersContext);
    return (
        <div className={classes["item-wrapper"]}>
            <div>
                <h1>{props.item.name}</h1>
                <h3>{props.item.description}</h3>
                <h4>{props.item.price}$</h4>
                {props.item.count && <h4>{props.item.count}개</h4>}
            </div>

            {props.type === "CART" && (
                <div>
                    <Button
                        className="xs"
                        onClick={orderCtx.removeItem.bind(null, props.item.id)}
                        text="X"
                    />
                </div>
            )}
        </div>
    );
};

export default OrderItem;
