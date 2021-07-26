import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import NavBar from "./components/layout/NavBar";
import Landing from "./components/layout/Landing";

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <div className="container">
                <Landing />
            </div>
        </div>
    );
};

export default App;
