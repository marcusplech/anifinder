import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import {
    fetchShowTrending,
    fetchShowAiring,
    fetchShowRated,
    fetchShowComing,
    fetchShowGenres,
} from "./state/action-creators";
// Import Components
import NavBar from "./components/layout/NavBar";
import Home from "./components/Home";
import SinglePageAnime from "./components/SinglePageAnime";
import Footer from "./components/layout/Footer";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchShowTrending(dispatch);
        fetchShowAiring(dispatch);
        fetchShowRated(dispatch);
        fetchShowComing(dispatch);
        fetchShowGenres(dispatch);
    }, []);

    return (
        <Router>
            <NavBar />
            <div
                style={{
                    gridTemplateRows: "auto 1fr auto",
                    overflow: "hidden",
                }}
            >
                <Route path="/" exact component={Home} />
                <Route
                    path="/:slug/:totalLength"
                    exact
                    component={SinglePageAnime}
                />
                <Footer />
            </div>
        </Router>
    );
};

export default App;
