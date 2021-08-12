import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// Import Components
import Signup from "./components/Signup";
import {
    fetchShowTrending,
    fetchShowAiring,
    fetchShowRated,
    fetchShowComing,
    fetchShowGenres,
} from "./state/action-creators";
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
                className="hahaha"
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
                <Route path="/signup" exact component={Signup} />
            </div>
            <Footer />
        </Router>
    );
};

export default App;
