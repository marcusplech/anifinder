import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";

import "./NavBar.css";
import logo from "./imgs/logo.svg";

const NavBar = (props) => {
    const [showNav, setShowNav] = useState(false);

    const pageId = parseInt(props.location?.pathname.split("/")[2]);
    let single;

    useEffect(() => {
        const renderStyle = () => {
            if (Number.isInteger(pageId)) {
                setShowNav(true);
            } else {
                setShowNav(false);
            }
        };
        renderStyle();
    }, [pageId]);

    showNav ? (single = "single") : (single = "");

    return (
        <div className={`navbar ${single}`}>
            <div className="wrap-guest">
                <a className="icon-logo" href="/">
                    <img
                        src={logo}
                        alt="icon-logo"
                        style={{ height: "50px" }}
                    ></img>
                </a>
                <div className="links">
                    <div className="browse-wrap">
                        <a href="/" className="link">
                            Browse
                        </a>
                        <a href="/" className="link">
                            Social
                        </a>
                        <a href="/" className="link">
                            Forum
                        </a>
                        <a href="/" className="link-login">
                            Login
                        </a>
                        <a href="/signup" className="link-signup">
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(NavBar);
