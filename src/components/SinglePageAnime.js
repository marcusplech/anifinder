import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import "./SinglePageAnime.css";
import NavBarSinglePage from "./layout/NavBarSinglePage";

const SinglePageAnime = (props) => {
    const id = props.location.pathname.split("/")[1];
    const idName = id.replace("-", " ");
    const [singleAnimeData, setSingleAnimeData] = useState(null);
    const [debouncedText, setDebouncedText] = useState(id);

    //setSingleAnimeData(props.location.state.animeData) we can also use the current state if we need to!
    const renderContent = (props) => {
        if (singleAnimeData) {
            const coverImage =
                singleAnimeData[0]?.attributes?.coverImage?.original;
            const posterImage =
                singleAnimeData[0]?.attributes?.posterImage?.small;
            const startDate =
                singleAnimeData[0]?.attributes?.startDate?.split("-")[0];
            const averageRating = singleAnimeData[0]?.attributes?.averageRating;
            const synopsis = singleAnimeData[0]?.attributes?.synopsis;
            const youtubeId = singleAnimeData[0]?.attributes?.youtubeVideoId;

            //anime extra details

            const ageRating = singleAnimeData[0]?.attributes?.ageRatingGuide;
            const numberOfEpisodes =
                singleAnimeData[0]?.attributes?.episodeCount;
            const aired = startDate; //need to refactor it to look at just the year;
            const engTitle = singleAnimeData[0]?.attributes?.titles.en;
            const jpTitle = singleAnimeData[0]?.attributes?.titles.en_jp;
            const niponTitle = singleAnimeData[0]?.attributes?.titles?.ja_jp;
            const status = singleAnimeData[0]?.attributes?.status;

            return (
                <div className="singlepage-content">
                    <NavBarSinglePage />
                    <div className="media-page">
                        <div className="header-wrap">
                            <div
                                className="banner"
                                style={{
                                    backgroundImage: `url("${coverImage}")`,
                                }}
                            >
                                <div className="shadow"></div>
                            </div>
                            <div className="header-single">
                                <div className="container-single">
                                    <div className="cover-wrap">
                                        <div
                                            className="cover-wrap-inner"
                                            style={{ position: "static" }}
                                        >
                                            <img
                                                className="posterImage"
                                                alt={`Imagem de ${id} `}
                                                key={posterImage}
                                                src={posterImage}
                                            ></img>
                                        </div>
                                        <div className="actions">
                                            <div className="list">
                                                <div className="add">
                                                    Add to List
                                                </div>
                                                <div className="dropdown"></div>
                                            </div>
                                            <div className="favourite"></div>
                                        </div>
                                    </div>
                                    <div className="content-single">
                                        <h1 className="h1-single">{idName}</h1>
                                        <p className="description-single">
                                            {synopsis}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content container"></div>
                    </div>
                </div>
            );
        }
    };
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(id);
        }, 500);
        return () => {
            clearTimeout(timerId);
        };
    }, [id]);

    useEffect(() => {
        const search = () => {
            fetch(`https://kitsu.io/api/edge/anime?filter[text]=${id}`)
                .then((res) => res.json())
                .then((newData) => {
                    setSingleAnimeData(newData.data);
                });
        };
        search();
    }, [debouncedText]);

    return <>{renderContent(props)}</>;
};

export default SinglePageAnime;
