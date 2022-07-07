import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/_main/Home";
import Gift from "./pages/gift/_main/Gift";

//
interface AppProps {}

//
const App: React.FunctionComponent<AppProps> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gift" element={<Gift />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
