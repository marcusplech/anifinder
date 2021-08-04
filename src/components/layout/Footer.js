import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="wrap">
            <div className="footer">
                <div className="footer-container">
                    <div className="theme-selector">
                        <h2 className="h2-footer">Site Theme</h2>
                        <div className="light-theme"></div>
                        <div className="dark-theme"></div>
                    </div>
                    <div className="footer-links"></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
