import React, { useState, useEffect } from "react";
import icon from "./layout/imgs/icons-search.svg";
import axios from "axios";
import "./Search.css";
import { fetchShowCaseContent } from "../actions/fetchActions";

const Search = () => {
    const [text, setText] = useState("");
    const [genre, setGenre] = useState("");
    // const [filters, setFilters] = useState("");
    // const [year, setYear] = useState('')
    // const [genre, setGenre] = useState('')
    // const [genre, setGenre] = useState('')
    const [results, setResults] = useState([]);
    const [debouncedText, setDebouncedText] = useState();

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [text]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get(
                `https://kitsu.io/api/edge/anime?filter[text]=${text}`
            );
            setResults(data.data);
        };
        search();
    }, [debouncedText]);
    console.log(results);

    const renderedResults = results.map((result) => {
        return (
            <div className="item">
                <div className="content">
                    <div className="header">
                        <img src={result.attributes.posterImage.tiny}></img>
                    </div>
                </div>
            </div>
        );
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
                                            value={genre}
                                            placeholder="Any"
                                            onChange={(e) =>
                                                setGenre(e.target.value)
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
                                            placeholder="Any"
                                            onChange={(e) =>
                                                setText(e.target.value)
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
                            <div className="name">Season</div>
                            <div className="select-wrap">
                                <div className="select">
                                    <div className="value-wrap">
                                        <div className="placeholder">Any</div>
                                        <input
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
                                        <div className="placeholder">Any</div>
                                        <input
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
                                        <div className="placeholder">Any</div>
                                        <input
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
                <div className="search-landing">
                    <div className="landing-section">
                        <div className="title-link">
                            <h3>Trending Now</h3>
                            <div className="expand">View All</div>
                        </div>

                        <div className="results">{renderedResults}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
