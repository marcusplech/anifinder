import React from "react";
import Landing from "./Landing/Landing";
import Search from "./Search/Search";
import HomeCards from "./Cards/HomeCards";
// import HomeList from "./HomeList";

const Home = () => {
    return (
        <div className="main content">
            <Landing />
            <Search />
            <HomeCards />
            {/* Colocar quando tiver tempo */}
            {/* <HomeList /> */}
        </div>
    );
};

export default Home;
