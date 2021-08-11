import React from "react";
import Card from "./Card";
import "./HomeCards.css";

import { selectors } from "../state/selectors/returns";

import { useSelector } from "react-redux";

const HomeCards = () => {
    const stateTrending = useSelector(selectors.getTrending);
    const stateAiring = useSelector(selectors.getAiring);
    const stateRated = useSelector(selectors.getRated);
    const stateComing = useSelector(selectors.getComing);

    return (
        <div className="search-landing">
            <div className="landing-section">
                <div className="title-link">
                    <h3>Trending Now</h3>
                </div>
                <div className="results">
                    {stateTrending.map((dado) => (
                        <Card
                            key={dado.attributes.canonicalTitle}
                            data={dado.attributes}
                        />
                    ))}
                </div>
            </div>
            <div className="landing-section">
                <div className="title-link">
                    <h3>Top Airing Anime</h3>
                </div>
                <div className="results">
                    {stateAiring.map((dado) => (
                        <Card
                            key={dado.attributes.canonicalTitle}
                            data={dado.attributes}
                        />
                    ))}
                </div>
            </div>
            <div className="landing-section">
                <div className="title-link">
                    <h3>Highest Rated Anime</h3>
                </div>
                <div className="results">
                    {stateRated.map((dado) => (
                        <Card
                            key={dado.attributes.canonicalTitle}
                            data={dado.attributes}
                        />
                    ))}
                </div>
            </div>
            <div className="landing-section">
                <div className="title-link">
                    <h3>Upcoming Anime</h3>
                </div>
                <div className="results">
                    {stateComing.map((dado) => (
                        <Card
                            key={dado.attributes.canonicalTitle}
                            data={dado.attributes}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeCards;
