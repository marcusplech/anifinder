import React from "react";
import { useSelector } from "react-redux";
import "./Card.css";

import { selectors } from "../selectors/returns";

const Card = () => {
    const stateTrending = useSelector(selectors.getTrending);
    const image = stateTrending.map((e) => e.attributes.posterImage.tiny);
    console.log(image.forEach((e) => e));
    // console.log(state.map((e) => e));

    return (
        <div className="media-card">
            <a className="cover">
                <img
                    key={`${Image}`}
                    src={`${image[0]}`}
                    alt="poster anime"
                ></img>
            </a>
            <a href="/" className="title">
                {/* {state.map((e) => e.attributes.canonicalTitle)} */}
            </a>
            {/* <div className="hover-data">
                <div className="header">
                    <div className="studios"></div>
                    <div className="info">
                        <span></span>
                        <div className="genres">
                            <div className="genre"></div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Card;
