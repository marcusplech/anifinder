import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Import Components
import Form from "./components/Form";
import {
    fetchShowTrending,
    fetchShowAiring,
    fetchShowRated,
    fetchShowComing,
    fetchShowGenres,
    fetchShowPopularity,
} from "./state/action-creators";
import NavBar from "./components/Header/NavBar";
import Home from "./components/Home";
import SinglePageAnime from "./components/SinglePageAnime";
import Footer from "./components/Footer/Footer";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchShowTrending(dispatch);
        fetchShowAiring(dispatch);
        fetchShowRated(dispatch);
        fetchShowComing(dispatch);
        fetchShowGenres(dispatch);
        fetchShowPopularity(dispatch);
    }, []);

    return (
        <Router>
            <NavBar />
            <div className="main-container">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route
                        path="/:slug/:totalLength"
                        exact
                        component={SinglePageAnime}
                    />
                    <Route path="/signup" exact component={Form} />
                </Switch>
            </div>
            <Footer />
        </Router>
    );
};

export default App;
