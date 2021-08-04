import React from "react";
import Landing from "./layout/Landing";
import Search from "./Search";
import Footer from "./layout/Footer";

const Home = () => {
    return (
        <>
            <div
                className="main content"
                style={{ marginTop: "50px", overflow: "hidden" }}
            >
                <Landing />
                <Search />
                <Footer />
            </div>
        </>
    );
};

export default Home;
