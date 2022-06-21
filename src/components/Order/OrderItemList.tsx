import React, { useContext } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import Order from "../../models/order";
import OrderItem from "./OrderItem";
import { OrdersContext } from "../../store/orders-context";
import classes from "./OrderItemList.module.css";

interface IOrderItemListProps {
    item: Order;
}

const OrderItemList: React.FC<IOrderItemListProps> = (props) => {
    const orderCtx = useContext(OrdersContext);
    return (
        <div className={classes["list-wrapper"]}>
            <Card>
                <OrderItem item={props.item} type={"LIST"} />
                <div className={classes["button-wrapper"]}>
                    <Button
                        className="md"
                        onClick={orderCtx.addItem.bind(null, props.item)}
                        text="장바구니 담기"
                    />
                </div>
            </Card>
        </div>
    );
};

export default OrderItemList;
