import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// Import Components
import NavBar from "./components/layout/NavBar";
import Home from "./components/Home";
import SinglePageAnime from "./components/SinglePageAnime";
import {
    fetchShowTrending,
    fetchShowAiring,
    fetchShowRated,
    fetchShowComing,
} from "./state/action-creators";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchShowTrending(dispatch);
        fetchShowAiring(dispatch);
        fetchShowRated(dispatch);
        fetchShowComing(dispatch);
    }, []);

    return (
        <Router>
            <Route path="/" exact component={NavBar} />
            <Route path="/" exact component={Home} />
            <Route path="/:slug/" exact component={SinglePageAnime} />
        </Router>
    );
};

export default App;
