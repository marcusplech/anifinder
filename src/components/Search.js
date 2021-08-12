import React, { useState, useEffect, useRef } from "react";
import icon from "./layout/imgs/icons-search.svg";
import "./Search.css";

import { selectors } from "../state/selectors/returns";
import { useSelector } from "react-redux";

import HomeCards from "./HomeCards";
import Card from "./Card";
import Dropdown from "./Dropdown";

const Search = () => {
    const stateGenres = useSelector(selectors.getGenres);
    const [selectValueGenres, setSelectValueGenres] = useState([]);
    const [selectValueYears, setSelectValueYears] = useState([]);
    const [selectValueFormat, setSelectValueFormat] = useState([]);
    const [selectValueAiring, setSelectValueAiring] = useState([]);

    const [text, setText] = useState("");

    const [results, setResults] = useState([]);
    const [genreResults, setGenreResults] = useState([]);
    const [airingResults, setAiringResults] = useState([]);
    const [formatResults, setFormatResults] = useState([]);
    const [yearResults, setYearResults] = useState([]);
    const [debouncedText, setDebouncedText] = useState(text);

    //DROPDOWN
    const [openGenres, setOpenGenres] = useState(false);
    const [openFormat, setOpenFormat] = useState(false);
    const [openAiring, setOpenAiring] = useState(false);
    const [openYear, setOpenYear] = useState(false);

    const ref = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpenFormat(!setOpenFormat);
                setOpenGenres(!setOpenGenres);
                setOpenAiring(!setOpenAiring);
                setOpenYear(!setOpenYear);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [ref]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [text]);

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
                `https://kitsu.io/api/edge/anime?page[offset]=0&filter[genres]=${selectValueGenres}&sort=popularityRank`
            )
                .then((res) => res.json())
                .then((newData) => {
                    setGenreResults(newData.data);
                });
        };

        const getAiring = () => {
            fetch(
                `https://kitsu.io/api/edge/anime?page[offset]=0&filter[status]=${selectValueAiring}&sort=popularityRank`
            )
                .then((res) => res.json())
                .then((newData) => {
                    setAiringResults(newData.data);
                });
        };

        const getFormat = () => {
            fetch(
                `https://kitsu.io/api/edge/anime?page[offset]=0&filter[subtype]=${selectValueFormat}&sort=popularityRank`
            )
                .then((res) => res.json())
                .then((newData) => {
                    setFormatResults(newData.data);
                });
        };

        const getYear = () => {
            fetch(
                `https://kitsu.io/api/edge/anime?filter[year]=${selectValueYears}`
            )
                .then((res) => res.json())
                .then((newData) => {
                    setYearResults(newData.data);
                });
        };

        getYear();
        getFormat();
        getAiring();
        getGenres();
        search();
    }, [
        debouncedText,
        selectValueGenres,
        selectValueYears,
        selectValueFormat,
        selectValueAiring,
    ]);

    const getStateGenres = stateGenres?.map((result, i) => {
        return (
            <div
                key={i}
                onClick={(e) => setSelectValueGenres(e.target.innerText)}
                value={result}
                type="submit"
                className="option"
            >
                {result.attributes.name}
            </div>
        );
    });

    const arrYears = Array.from({ length: 40 }, (_, i) => 2022 - i);

    const years = arrYears?.map((result, i) => {
        return (
            <div
                type="submit"
                value={result}
                onClick={(e) => setSelectValueYears(e.target.innerText)}
                key={i}
                className="option"
            >
                {result}
            </div>
        );
    });

    const formats = ["TV", "Movie", "Special", "OVA", "ONA", "Music"];

    const dropFormats = formats.map((result, i) => {
        return (
            <div
                className="option"
                key={i}
                type="submit"
                value={result}
                onClick={(e) => setSelectValueFormat(e.target.innerText)}
            >
                {result}
            </div>
        );
    });

    const airingStatus = [
        "Finished",
        "Current",
        // "Not Yet Released",
        // "Cancelled",
    ];

    const dropAiring = airingStatus.map((result, i) => {
        return (
            <div
                className="option"
                type="submit"
                value={result}
                onClick={(e) => setSelectValueAiring(e.target.innerText)}
            >
                {result}
            </div>
        );
    });

    const renderedAnime = results?.map((result) => {
        return <div key={result.id}>{result.attributes.canonicalTitle}</div>;
    });

    const renderedGenre = genreResults?.map((resultGenre, i) => {
        return <div key={i}>{resultGenre.attributes.canonicalTitle}</div>;
    });

    const renderedFormat = formatResults?.map((resultFormat, i) => {
        return <div key={i}>{resultFormat.attributes.canonicalTitle}</div>;
    });

    const renderedYear = yearResults?.map((resultYear, i) => {
        return <div key={i}>{resultYear.attributes.canonicalTitle}</div>;
    });

    const renderedAiring = airingResults?.map((resultAiring, i) => {
        return <div key={i}>{resultAiring.attributes.canonicalTitle}</div>;
    });

    return (
        <div className="search">
            <div className="container">
                <div className="filters-wrap">
                    <div ref={ref} className="filters">
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
                                    <input
                                        onChange={(e) =>
                                            setSelectValueGenres(e.target.value)
                                        }
                                        onClick={() =>
                                            setOpenGenres(!openGenres)
                                        }
                                        value={selectValueGenres}
                                        placeholder="Any"
                                        type="search"
                                        autoComplete="off"
                                        className="filter"
                                    ></input>
                                    <svg
                                        onClick={() =>
                                            setOpenGenres(!openGenres)
                                        }
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
                                <Dropdown
                                    open={openGenres}
                                    setOpen={setOpenGenres}
                                    title="Genres"
                                    canal={getStateGenres}
                                />
                            </div>
                        </div>
                        <div className="filter-select">
                            <div className="name">Year</div>
                            <div className="select-wrap">
                                <div id="select" className="select">
                                    <div className="value-wrap">
                                        <input
                                            onClick={() =>
                                                setOpenYear(!openYear)
                                            }
                                            onChange={(e) =>
                                                setSelectValueYears(
                                                    e.target.value
                                                )
                                            }
                                            value={selectValueYears}
                                            placeholder="Any"
                                            type="search"
                                            autoComplete="off"
                                            className="filter"
                                        ></input>
                                    </div>
                                    <svg
                                        onClick={() => setOpenYear(!openYear)}
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
                                    <Dropdown
                                        open={openYear}
                                        setOpen={setOpenYear}
                                        title="Years"
                                        canal={years}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="filter-select">
                            <div className="name">Format</div>
                            <div className="select-wrap">
                                <div className="select">
                                    <div className="value-wrap">
                                        <input
                                            onChange={(e) =>
                                                setSelectValueFormat(
                                                    e.target.value
                                                )
                                            }
                                            onClick={() =>
                                                setOpenFormat(!openFormat)
                                            }
                                            value={selectValueFormat}
                                            placeholder="Any"
                                            type="search"
                                            autoComplete="off"
                                            className="filter"
                                        ></input>
                                    </div>
                                    <svg
                                        onClick={() =>
                                            setOpenFormat(!openFormat)
                                        }
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
                                    <Dropdown
                                        open={openFormat}
                                        setOpen={setOpenFormat}
                                        canal={dropFormats}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="filter-select">
                            <div className="name">Airing Status</div>
                            <div className="select-wrap">
                                <div className="select">
                                    <div className="value-wrap">
                                        <input
                                            onChange={(e) =>
                                                setSelectValueAiring(
                                                    e.target.value
                                                )
                                            }
                                            onClick={() =>
                                                setOpenAiring(!openAiring)
                                            }
                                            value={selectValueAiring}
                                            placeholder="Any"
                                            type="search"
                                            autoComplete="off"
                                            className="filter"
                                        ></input>
                                    </div>
                                    <svg
                                        onClick={() =>
                                            setOpenAiring(!openAiring)
                                        }
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
                                    <Dropdown
                                        open={openAiring}
                                        setOpen={setOpenAiring}
                                        canal={dropAiring}
                                    />
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
                <HomeCards key={Card} />
            </div>
        </div>
    );
};

export default Search;
