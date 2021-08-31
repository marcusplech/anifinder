import React, { useState } from "react";
import Landing from "./Landing/Landing";
import Search from "./Search/Search";
import HomeCards from "./Cards/HomeCards";
// import HomeList from "./HomeList";

const Home = () => {
    const [search, setSearch] = useState([]);
    return (
        <div className="main content" style={{ minHeight: "100vh" }}>
            <Landing />
            <Search search={setSearch} />
            {search && !search.length ? <HomeCards /> : ""}
            {/* Colocar quando tiver tempo */}
            {/* <HomeList /> */}
        </div>
    );
};

export default Home;
