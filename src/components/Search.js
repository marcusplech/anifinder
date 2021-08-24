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

    //DROPDOWN
    const [openGenres, setOpenGenres] = useState(false);
    const [openFormat, setOpenFormat] = useState(false);
    const [openAiring, setOpenAiring] = useState(false);
    const [openYear, setOpenYear] = useState(false);
    const arrYears = Array.from({ length: 40 }, (_, i) => 2022 - i);
    const formats = ["TV", "Movie", "Special", "OVA", "ONA", "Music"];
    const airingStatus = ["Finished", "Current", "Unreleased", "TBA"];

    const ref = useRef();

    const openDropDown = (type) => {
        switch (type) {
            case "Genres":
                setOpenFormat(false);
                setOpenAiring(false);
                setOpenYear(false);
                setOpenGenres(true);
                break;
            case "Airing":
                setOpenFormat(false);
                setOpenAiring(true);
                setOpenYear(false);
                setOpenGenres(false);
                break;
            case "Year":
                setOpenFormat(false);
                setOpenAiring(false);
                setOpenYear(true);
                setOpenGenres(false);
                break;
            case "Format":
                setOpenFormat(true);
                setOpenAiring(false);
                setOpenYear(false);
                setOpenGenres(false);
                break;
            default:
                setOpenFormat(false);
                setOpenAiring(false);
                setOpenYear(false);
                setOpenGenres(false);
                break;
        }
    };

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
        const getAnimes = (search, genres, year, airing, format) => {
            let url = "https://kitsu.io/api/edge/anime?";

            if (search) {
                url += `&filter[text]=${search}`;
            }
            if (genres.length > 0) {
                url += `&filter[categories]=${genres}`;
            }
            if (year.length > 0) {
                url += `&filter[year]=${year}`;
            }
            if (airing.length > 0) {
                url += `&filter[status]=${airing}`;
            }
            if (format.length > 0) {
                url += `&filter[subtype]=${format}`;
            }

            if (url !== "https://kitsu.io/api/edge/anime?") {
                fetch(url)
                    .then((res) => res.json())
                    .then((newData) => {
                        setResults(newData.data);
                    });
            } else {
                setResults([]);
            }
        };

        const timerId = setTimeout(() => {
            getAnimes(
                text,
                selectValueGenres,
                selectValueYears,
                selectValueAiring,
                selectValueFormat
            );
        }, 300);

        return () => {
            clearTimeout(timerId);
        };
    }, [
        text,
        selectValueGenres,
        selectValueYears,
        selectValueFormat,
        selectValueAiring,
    ]);

    const getStateMap = (values, setFunc, attributes = false) => {
        return values.map((result, i) => {
            return (
                <div
                    key={i}
                    onClick={(e) => setFunc(e.target.innerText)}
                    value={result}
                    type="submit"
                    className="option"
                >
                    {attributes ? result.attributes.name : result}
                </div>
            );
        });
    };

    const renderedAnime = results?.map((result) => {
        return (
            <div>
                <Card data={result.attributes} />
            </div>
        );
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
                                    onClick={() => openDropDown("Search")}
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
                                        onClick={() => openDropDown("Genres")}
                                        value={selectValueGenres}
                                        placeholder="Any"
                                        type="search"
                                        autoComplete="off"
                                        className="filter"
                                    ></input>
                                    <svg
                                        onClick={() => openDropDown("Genres")}
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
                                    key={openGenres}
                                    open={openGenres}
                                    setOpen={setOpenGenres}
                                    title="Genres"
                                    canal={getStateMap(
                                        stateGenres,
                                        setSelectValueGenres,
                                        true
                                    )}
                                />
                            </div>
                        </div>
                        <div className="filter-select">
                            <div className="name">Year</div>
                            <div className="select-wrap">
                                <div id="select" className="select">
                                    <div className="value-wrap">
                                        <input
                                            onClick={() => openDropDown("Year")}
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
                                        onClick={() => openDropDown("Year")}
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
                                        key={openYear}
                                        open={openYear}
                                        setOpen={setOpenYear}
                                        title="Years"
                                        canal={getStateMap(
                                            arrYears,
                                            setSelectValueYears
                                        )}
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
                                                openDropDown("Format")
                                            }
                                            value={selectValueFormat}
                                            placeholder="Any"
                                            type="search"
                                            autoComplete="off"
                                            className="filter"
                                        ></input>
                                    </div>
                                    <svg
                                        onClick={() => openDropDown("Format")}
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
                                        title="Format"
                                        key={openFormat}
                                        open={openFormat}
                                        setOpen={setOpenFormat}
                                        canal={getStateMap(
                                            formats,
                                            setSelectValueFormat
                                        )}
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
                                                openDropDown("Airing")
                                            }
                                            value={selectValueAiring}
                                            placeholder="Any"
                                            type="search"
                                            autoComplete="off"
                                            className="filter"
                                        ></input>
                                    </div>
                                    <svg
                                        onClick={() => openDropDown("Airing")}
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
                                        title="Airing"
                                        key={openAiring}
                                        open={openAiring}
                                        setOpen={setOpenAiring}
                                        canal={getStateMap(
                                            airingStatus,
                                            setSelectValueAiring
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="landing-section">
                    <div className="results">{renderedAnime}</div>
                </div>
                <HomeCards />
            </div>
        </div>
    );
};

export default Search;
