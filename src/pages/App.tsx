import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Page404 } from "./Page404";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={`/`} element={<Home />} />
                    <Route path={`*`} element={<Page404 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
