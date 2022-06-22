import React, { ReactNode, useState } from "react";

import Item from "../models/order";

interface IOrdersContextProps {
    children: ReactNode;
}

interface OrderContextObj {
    items: Item[];
    totalAmount: number;
    addItem: (item: Item) => void;
    removeItem: (id: string) => void;
    resetItem: () => void;
}

export const OrdersContext = React.createContext<OrderContextObj>({
    items: [],
    totalAmount: 0,
    addItem: () => {},
    removeItem: () => {},
    resetItem: () => {},
});

const OrdersContextProvider: React.FC<IOrdersContextProps> = (props) => {
    const [orders, setOrders] = useState<Item[]>([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const addItemHandler = (item: Item) => {
        setOrders((prev) => {
            const existingIndex = prev.findIndex((val) => val.id === item.id);
            if (existingIndex !== -1) {
                const existingItem = prev[existingIndex];
                const updatedItem = {
                    ...existingItem,
                    count: existingItem.count + 1,
                };
                const updatedItems = [...prev];
                updatedItems[existingIndex] = updatedItem;
                return updatedItems;
            } else {
                return [...prev, { ...item, count: 1 }];
            }
        });
        setTotalAmount((prev) => {
            return prev + item.price;
        });
    };
    const removeItemHandler = (orderId: string) => {
        setOrders((prev) => {
            return prev.filter((item: Item) => item.id !== orderId);
        });
        setTotalAmount((prev) => {
            let target = orders.find((item: Item) => item.id === orderId);
            return prev - target!.count * target!.price;
        });
    };
    const resetItemHander = () => {
        setOrders([]);
        setTotalAmount(0);
    };

    const contextValue: OrderContextObj = {
        items: orders,
        totalAmount: totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        resetItem: resetItemHander,
    };
    return (
        <OrdersContext.Provider value={contextValue}>
            {props.children}
        </OrdersContext.Provider>
    );
};

export default OrdersContextProvider;
