import React from "react";
import "./Landing.css";
import stats from "../../../components/layout/imgs/stats.svg";
import social from "../../../components/layout/imgs/social.svg";
import apps from "../../../components/layout/imgs/apps.svg";
import custom from "../../../components/layout/imgs/custom.svg";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className="landing">
            <h1 className="heading">The next-generation anime platform</h1>
            <h2 className="sub-heading">
                Track, share, and discover your favorite anime with AniList.
            </h2>
            <div className="feature-cards">
                <div className="feature-card">
                    <div className="icon-stats">
                        <img src={stats} alt="icon-stats"></img>
                    </div>
                    <div>
                        <h3 className="title">Discover your obsessions</h3>
                        <div className="description">
                            What are your highest rated genres or most watched
                            voice actor? Follow your watching habits over time
                            with in-depth statistics.
                        </div>
                    </div>
                </div>
                <div className="feature-card">
                    <div className="icon-app">
                        <img src={apps} alt="icon-app"></img>
                    </div>
                    <div>
                        <h3 className="title">Bring AniList anywhere</h3>
                        <div className="description">
                            Keep track of your progress on-the-go with one of
                            many AniList apps across iOS, Android, macOS, and
                            Windows.
                        </div>
                    </div>
                </div>
                <div className="feature-card">
                    <div className="icon-social">
                        <img src={social} alt="icon-social"></img>
                    </div>
                    <div>
                        <h3 className="title">Join the conversation</h3>
                        <div className="description">
                            Share your thoughts with our thriving community,
                            make friends, socialize, and receive
                            recommendations.
                        </div>
                    </div>
                </div>
                <div className="feature-card">
                    <div className="icon-custom">
                        <img src={custom} alt="icon-custom"></img>
                    </div>
                    <div>
                        <h3 className="title">Tweak it to your liking</h3>
                        <div className="description">
                            Customize your scoring system, title format, color
                            scheme, and much more! Also, we have a dark mode.
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/signup" className="join-btn">
                <div className="label">Join Now</div>
                <div className="circle">
                    <i className="fas fa-chevron-right"></i>
                </div>
            </Link>
        </div>
    );
};

export default Landing;
