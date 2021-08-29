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
                <div className="App">
                    <NavBar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route
                            path="/:slug/:totalLength"
                            exact
                            component={SinglePageAnime}
                        />
                        <Route path="/signup" exact component={SignupPage} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </>
    );
};

export default App;
