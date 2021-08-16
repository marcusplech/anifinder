import React from "react";
import Landing from "./layout/Landing";
import Search from "./Search";
// import HomeList from "./HomeList";

const Home = () => {
    return (
        <>
            <div className="main content">
                <Landing />
                <Search />
                {/* Colocar quando tiver tempo */}
                {/* <HomeList /> */}
            </div>
        </>
    );
};

export default Home;
