import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Import Components
import Form from "./components/Signup/Form";
import NavBar from "./components/Header/NavBar";
import Home from "./components/Home/Home";
import SinglePageAnime from "./components/SinglePage/SinglePageAnime";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <>
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
        </>
    );
};

export default App;
