import React, { useState, useEffect } from "react";
import icon from "./layout/imgs/icons-search.svg";
import "./Search.css";

import HomeCards from "./HomeCards";

const Search = () => {
    const [text, setText] = useState("");
    const [genres, setGenres] = useState("");
    const [airing, setAiring] = useState("");
    const [format, setFormat] = useState("");
    const [year, setYear] = useState("");

    const [results, setResults] = useState([]);
    const [genreResults, setGenreResults] = useState([]);
    const [airingResults, setAiringResults] = useState([]);
    const [formatResults, setFormatResults] = useState([]);
    const [yearResults, setYearResults] = useState([]);
    const [debouncedText, setDebouncedText] = useState(
        text,
        genres,
        airing,
        format
    );

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text, genres, airing, format);
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [text, genres, airing, format]);

    useEffect(() => {
        const search = () => {
            fetch(`https://kitsu.io/api/edge/anime?filter[text]=${text}`)
                .then((res) => res.json())
                .then((newData) => {
                    setResults(newData.data);
                });
        };

        const getGenres = () => {
            fetch(
                `https://kitsu.io/api/edge/anime?page[offset]=0&filter[genres]=${genres}&sort=popularityRank`
            )
                .then((res) => res.json())
                .then((newData) => {
                    setGenreResults(newData.data);
                });
        };
        const getAiring = () => {
            fetch(
                `https://kitsu.io/api/edge/anime?page[offset]=0&filter[status]=${airing}&sort=popularityRank`
            )
                .then((res) => res.json())
                .then((newData) => {
                    setAiringResults(newData.data);
                });
        };

        const getFormat = () => {
            fetch(
                `https://kitsu.io/api/edge/anime?page[offset]=0&filter[subtype]=${format}&sort=popularityRank`
            )
                .then((res) => res.json())
                .then((newData) => {
                    setFormatResults(newData.data);
                });
        };
        // const getYear = () => {
        //     fetch(`https://kitsu.io/api/edge/anime?filter[year]=${year}`)
        //         .then((res) => res.json())
        //         .then((newData) => {
        //             setYearResults(newData.data);
        //         });
        // };
        // getYear();
        getFormat();
        getAiring();
        getGenres();
        search();
    }, [debouncedText, text, airing, format, genres]);

    const renderedAnime = results.map((result) => {
        return <div>{result.attributes.canonicalTitle}</div>;
    });

    const renderedGenre = genreResults.map((result) => {
        return <div>{result.attributes.canonicalTitle}</div>;
    });

    const renderedFormat = formatResults.map((result) => {
        return <div>{result.attributes.canonicalTitle}</div>;
    });

    const renderedYear = yearResults.map((result) => {
        return <div>{result.attributes}</div>;
    });
    console.log(renderedYear);

    const renderedAiring = airingResults.map((result) => {
        return <div>{result.attributes.canonicalTitle}</div>;
    });

    return (
        <div className="search">
            <div className="container">
                <div className="filters-wrap">
                    <div className="filters">
                        <div className="filter-select">
                            <div className="name">Search</div>
                            <div className="search-wrap">
                                <img
                                    src={icon}
                                    alt="icon-search"
                                    style={{
                                        fontSize: "13px",
                                        height: "1rem",
                                    }}
                                ></img>
                                <input
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    type="search"
                                    autoComplete="off"
                                    className="input-search"
                                ></input>
                            </div>
                        </div>
                        <div className="filter-select">
                            <div className="name">Genres</div>
                            <div className="select-wrap">
                                <div className="select">
                                    <div className="value-wrap">
                                        <input
                                            value={genres}
                                            placeholder="Any"
                                            onChange={(e) =>
                                                setGenres(e.target.value)
                                            }
                                            type="search"
                                            autoComplete="off"
                                            className="filter"
                                        ></input>
                                    </div>
                                    <svg
                                        className="chevrondown"
                                        width="24"
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
                                </div>
                            </div>
                        </div>
                        <div className="filter-select">
                            <div className="name">Year</div>
                            <div className="select-wrap">
                                <div className="select">
                                    <div className="value-wrap">
                                        <input
                                            value={year}
                                            placeholder="Any"
                                            onChange={(e) =>
                                                setYear(e.target.value)
                                            }
                                            type="search"
                                            autoComplete="off"
                                            className="filter"
                                        ></input>
                                    </div>
                                    <svg
                                        className="chevrondown"
                                        width="24"
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
                                </div>
                            </div>
                        </div>
                        <div className="filter-select">
                            <div className="name">Format</div>
                            <div className="select-wrap">
                                <div className="select">
                                    <div className="value-wrap">
                                        <input
                                            value={format}
                                            placeholder="Any"
                                            onChange={(e) =>
                                                setFormat(e.target.value)
                                            }
                                            type="search"
                                            autoComplete="off"
                                            className="filter"
                                        ></input>
                                    </div>
                                    <svg
                                        className="chevrondown"
                                        width="24"
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
                                </div>
                            </div>
                        </div>
                        <div className="filter-select">
                            <div className="name">Airing Status</div>
                            <div className="select-wrap">
                                <div className="select">
                                    <div className="value-wrap">
                                        <input
                                            value={airing}
                                            placeholder="Any"
                                            onChange={(e) =>
                                                setAiring(e.target.value)
                                            }
                                            type="search"
                                            autoComplete="off"
                                            className="filter"
                                        ></input>
                                    </div>
                                    <svg
                                        className="chevrondown"
                                        width="24"
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>{renderedAnime}</div>
                <div>{renderedGenre}</div>
                <div>{renderedFormat}</div>
                <div>{renderedAiring}</div>
                <div>{renderedYear}</div>
                <HomeCards />
            </div>
        </div>
    );
};

export default Search;
