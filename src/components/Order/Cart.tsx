import React, { useContext } from "react";

import Button from "../UI/Button";
import Modal from "../UI/Modal";
import OrderItem from "./OrderItem";
import { OrdersContext } from "../../store/orders-context";
import classes from "./Cart.module.css";

interface ICartProps {
    onClose: () => void;
}

const Cart: React.FC<ICartProps> = (props) => {
    const orderCtx = useContext(OrdersContext);
    const hasList = orderCtx.items.length > 0;
    const onResetHandler = () => {
        alert("주문 완료");
        orderCtx.resetItem();
        props.onClose();
    };
    return (
        <Modal onClose={props.onClose}>
            {orderCtx.items.map((item, i) => {
                return (
                    <OrderItem
                        key={`cart-${i}`}
                        type={"CART"}
                        item={item}
                    ></OrderItem>
                );
            })}
            {hasList && (
                <h2 className={classes["total-amount"]}>
                    결제 금액: {orderCtx.totalAmount.toFixed(2)}$
                </h2>
            )}
            <div className={classes.close}>
                {hasList && (
                    <Button
                        className="md"
                        onClick={onResetHandler}
                        text="주문하기"
                    />
                )}
                <Button
                    className="md"
                    onClick={props.onClose}
                    text="닫기"
                    style={{ marginLeft: "10px" }}
                />
            </div>
        </Modal>
    );
};

export default Cart;
