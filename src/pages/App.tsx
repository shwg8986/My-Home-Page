import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeWrapper } from "./HomeWrapper";
import { Page404 } from "./Page404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<HomeWrapper />} />
          <Route path={`*`} element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
