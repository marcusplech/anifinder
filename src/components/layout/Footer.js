import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
    const [theme, setTheme] = useState(false);

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="theme-selector">
                    <h2 className="h2-footer">Site Theme</h2>
                    <div
                        onClick={() => console.log(setTheme(!theme))}
                        className="light-theme"
                    >
                        A
                    </div>
                    <div className="dark-theme">A</div>
                </div>
                <div className="footer-links">
                    <div className="footer-section">
                        <span className="footer-a">Donate</span>
                        <span className="footer-a">AniList.co</span>
                        <span className="footer-a">AniChart.net</span>
                    </div>
                    <div className="footer-section">
                        <span className="footer-a">App</span>
                        <span className="footer-a">Site Stats</span>
                        <span className="footer-a">Recomendations</span>
                        <span className="footer-a">API</span>
                    </div>
                    <div className="footer-section">
                        <span className="footer-a">Discord</span>
                        <span className="footer-a">Twitter</span>
                        <span className="footer-a">Facebook</span>
                        <span className="footer-a">GitHub</span>
                    </div>
                    <div className="footer-section">
                        <span className="footer-a">App Data</span>
                        <span className="footer-a">Moderators</span>
                        <span className="footer-a">Contact</span>
                        <span className="footer-a">Terms & Privacy</span>
                        <span className="footer-a">Site Map</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
