import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

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
                        <span className="link">Browse</span>
                        <span className="link">Social</span>
                        <span className="link">Forum</span>
                        <span className="link-login">Login</span>
                        <Link to="/signup" className="link-signup">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(NavBar);
