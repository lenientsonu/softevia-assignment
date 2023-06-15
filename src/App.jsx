import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import HomePage from "./components/pages/HomePage";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Navbar from "./components/Navbar/Navbar";

import "./App.scss";

function App() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    return (
        <>
            <Navbar />
            <Routes>
                <Route
                    path='/'
                    element={isLoggedIn ? <HomePage /> : <Login />}
                />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </>
    );
}

export default App;
