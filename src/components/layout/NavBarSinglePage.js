import React from "react";

import "./NavBarSinglePage.css";
import logo from "./imgs/logo.svg";

const NavBarSinglePage = () => {
    return (
        <div className="navbarsingle">
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

export default NavBarSinglePage;
