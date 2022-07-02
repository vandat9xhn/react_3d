import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/_main/Home";

//
interface AppProps {}

//
const App: React.FunctionComponent<AppProps> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
