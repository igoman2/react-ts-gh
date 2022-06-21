import { useEffect, useState } from "react";

import Card from "../UI/Card";
import Order from "../../models/order";
import OrderItemList from "./OrderItemList";
import classes from "./Orders.module.css";

const Orders = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [list, setList] = useState<Order[]>([]);
    const [httpError, setHttpError] = useState("");

    const fetchOrderList = async () => {
        const resp = await fetch(
            "https://fir-a584a-default-rtdb.firebaseio.com/meals.json",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        if (!resp.ok) {
            throw new Error("fetched fail");
        }

        const respJSON = await resp.json();
        for (let key in respJSON) {
            let obj = {
                id: Math.random().toString(36).substr(2, 16),
                ...respJSON[key],
            };
            setList((prev) => [...prev, obj]);
        }
    };
    useEffect(() => {
        setIsLoading(true);
        fetchOrderList()
            .then(() => {
                setIsLoading(false);
            })
            .catch((error) => {
                setHttpError(error.message);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <p className={classes["orders-loading"]}>Loading...</p>;
    }
    if (httpError) {
        return <p className={classes["orders-error"]}>{httpError}</p>;
    }
    return (
        <div className={classes.orders}>
            <Card>
                {list.map((item, i) => {
                    return <OrderItemList key={`orders-${i}`} item={item} />;
                })}
            </Card>
        </div>
    );
};

export default Orders;
