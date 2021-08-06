import React from "react";
import Landing from "./layout/Landing";
import Search from "./Search";

const Home = () => {
    return (
        <>
            <div className="main content" style={{ overflow: "hidden" }}>
                <Landing />
                <Search />
            </div>
        </>
    );
};

export default Home;
