import React from "react";
import List from "./List";

const HomeList = () => {
    return (
        <div className="landing-section bot">
            <span className="title-link">
                <h3>Top 10 Anime</h3>
            </span>
            <div className="results-table">
                <List />
            </div>
        </div>
    );
};

export default HomeList;
