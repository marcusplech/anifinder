import React from "react";
// import axios from 'axios'
// import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

// Import Components
import NavBar from "./components/layout/NavBar";
import Landing from "./components/layout/Landing";
import Search from "./components/Search";

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <div className="page-content" style={{ marginTop: "50px" }}>
                <Landing />
                <Search />
            </div>
        </div>
    );
};

export default App;
