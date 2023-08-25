import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./index-Landing";
import App from "./App";

function MainRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/app" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MainRouter;
