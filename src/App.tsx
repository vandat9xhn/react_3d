import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/_main/Home";
import Gift from "./pages/gift/_main/Gift";
import Helicopter from "./pages/helicopter/_main/Helicopter";

//
interface AppProps {}

//
const App: React.FunctionComponent<AppProps> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gift" element={<Gift />} />
                <Route path="/heli" element={<Helicopter />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
