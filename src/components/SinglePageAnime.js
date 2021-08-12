import React, { useState, useEffect } from "react";

import "./SinglePageAnime.css";

const SinglePageAnime = (props) => {
    const id = props.location.pathname.split("/")[1];
    const idName = id.replace("-", " ");
    const [singleAnimeData, setSingleAnimeData] = useState(null);
    const [debouncedText, setDebouncedText] = useState(id);

    const renderContent = () => {
        if (singleAnimeData) {
            const coverImage =
                singleAnimeData[0]?.attributes?.coverImage?.original;
            const posterImage =
                singleAnimeData[0]?.attributes?.posterImage?.small;
            const startDate =
                singleAnimeData[0]?.attributes?.startDate?.split("-")[0];
            const averageRating = singleAnimeData[0]?.attributes?.averageRating;
            const synopsis = singleAnimeData[0]?.attributes?.synopsis;
            const ratingRank = singleAnimeData[0]?.attributes.ratingRank;
            const format = singleAnimeData[0]?.attributes?.subtype;
            const epiDuration = singleAnimeData[0]?.attributes?.episodeLength;
            const ageRating = singleAnimeData[0]?.attributes?.ageRatingGuide;
            const engTitle = singleAnimeData[0]?.attributes?.titles.en;
            const status = singleAnimeData[0]?.attributes?.status;
            const popularityRank =
                singleAnimeData[0]?.attributes.popularityRank;

            // Algumas opções que não foram utilizadas:

            // const numberOfEpisodes =
            // singleAnimeData[0]?.attributes?.episodeCount;
            // const jpTitle = singleAnimeData[0]?.attributes?.titles.en_jp;
            // const niponTitle = singleAnimeData[0]?.attributes?.titles?.ja_jp;
            // const youtubeId = singleAnimeData[0]?.attributes?.youtubeVideoId;

            return (
                <div className="singlepage-content">
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
                                <div className="sense-wrap"></div>
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
                                                <div className="dropdown">
                                                    <span className="span-dropdown">
                                                        <svg
                                                            className="single-chevrondown"
                                                            width="20"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="favourite">
                                                <svg
                                                    className="svg-heart"
                                                    viewBox="0 0 512 512"
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </div>
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
                        <div className="content container">
                            <div className="sidebar">
                                <div className="data">
                                    <div className="data-set">
                                        <div className="type">English</div>
                                        <div className="value">{engTitle}</div>
                                    </div>
                                    <div className="data-set">
                                        <div className="type">Format</div>
                                        <div className="value">{format}</div>
                                    </div>
                                    <div className="data-set">
                                        <div className="type">
                                            Episode Duration
                                        </div>
                                        <div className="value">{`${epiDuration} mins`}</div>
                                    </div>
                                    <div className="data-set">
                                        <div className="type">Status</div>
                                        <div className="value">{status}</div>
                                    </div>
                                    <div className="data-set">
                                        <div className="type">Start Date</div>
                                        <div className="value">{startDate}</div>
                                    </div>
                                    <div className="data-set">
                                        <div className="type">
                                            Community Approval
                                        </div>
                                        <div className="value">
                                            {`${averageRating}%`}
                                        </div>
                                    </div>
                                    <div className="data-set">
                                        <div className="type">
                                            Popularity Rank
                                        </div>
                                        <div className="value">
                                            {popularityRank}
                                        </div>
                                    </div>
                                    <div className="data-set">
                                        <div className="type">Rating Rank</div>
                                        <div className="value">
                                            {ratingRank}
                                        </div>
                                    </div>
                                    <div className="data-set">
                                        <div className="type">Age Rating</div>
                                        <div className="value">{ageRating}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
    }, [debouncedText, id]);

    return <>{renderContent(props)}</>;
};

export default SinglePageAnime;
