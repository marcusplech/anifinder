import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
    return (
        <Link
            to={`/${props.data.slug}/${props.data.totalLength}`}
            className="media-card"
        >
            <div className="cover">
                <img
                    className="image-load"
                    key={props.data.posterImage.small}
                    src={props.data.posterImage.small}
                    alt={`Capa de fundo ${props.data.canonicalTitle}`}
                ></img>
            </div>
            <span className="title-card">{props.data.canonicalTitle}</span>
            <div className="hover-data right">
                <div className="header">
                    <div className="studios"></div>
                    <div className="info">
                        <span></span>
                        <div className="genres">
                            <div className="genre"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;
