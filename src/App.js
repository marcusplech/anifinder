import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

// Import Components
import NavBar from "./components/layout/NavBar";
import Landing from "./components/layout/Landing";
import Search from "./components/Search";
import {
    fetchShowTrending,
    fetchShowAiring,
    fetchShowGenres,
    fetchShowRated,
} from "./state/action-creators";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchShowTrending(dispatch);
        fetchShowAiring(dispatch);
        fetchShowGenres(dispatch);
        fetchShowRated(dispatch);
    }, []);

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
