import React from "react";
import Card from "./Card";

const SearchLanding = () => {
    return (
        <div className="search-landing">
            <div className="landing-section-trending">
                <div className="title-link">
                    <h3>Trending Now</h3>
                    <div className="expand">View All</div>
                </div>
                <div className="results">
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default SearchLanding;
