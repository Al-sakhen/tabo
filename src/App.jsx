import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from './layouts/AppLayout';
import Register from './pages/Register';

function App() {
    // react routes
    return (
    <>
        <Routes>
            <Route path="/" element={<AppLayout/>}>
                <Route index element={<Home/>} />
                <Route path="/register" element={<Register/>} />
            </Route>
        </Routes>
    </>
    )
}

export default App;
