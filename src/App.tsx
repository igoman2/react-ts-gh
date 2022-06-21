import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cart from "./components/Order/Cart";
import Header from "./layouts/Header";
import Order from "./pages/Order";
import OrdersContextProvider from "./store/orders-context";
import Todo from "./pages/Todo";
import TodosContextProvider from "./store/todos-context";
import { useState } from "react";

function App() {
    const [onCart, setOnCart] = useState(false);
    const closeHandler = () => {
        setOnCart(false);
    };
    const openHandler = () => {
        setOnCart(true);
    };
    return (
        <BrowserRouter>
            <OrdersContextProvider>
                {onCart && <Cart onClose={closeHandler} />}
                <Header onClick={openHandler} />
                <TodosContextProvider>
                    <div className="App">
                        <Routes>
                            <Route path="/todo" element={<Todo />}></Route>
                            <Route path="/order" element={<Order />}></Route>
                        </Routes>
                    </div>
                </TodosContextProvider>
            </OrdersContextProvider>
        </BrowserRouter>
    );
}

export default App;
