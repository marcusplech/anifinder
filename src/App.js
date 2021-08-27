import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Import Components
import {
    NavBar,
    Home,
    SinglePageAnime,
    Footer,
    SignupPage,
} from "./components";

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
                        <Route path="/signup" exact component={SignupPage} />
                    </Switch>
                </div>
                <Footer />
            </Router>
        </>
    );
};

export default App;
