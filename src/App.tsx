import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./layouts/Header";
import Order from "./pages/Order";
import Todo from "./pages/Todo";
import TodosContextProvider from "./store/todos-context";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <TodosContextProvider>
                <div className="App">
                    <Routes>
                        <Route path="/todo" element={<Todo />}></Route>
                        <Route path="/order" element={<Order />}></Route>
                    </Routes>
                </div>
            </TodosContextProvider>
        </BrowserRouter>
    );
}

export default App;
