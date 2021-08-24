import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => (
    <Fragment>
        <div style={{ height: "100vh" }}>
            <img
                src={spinner}
                alt="Loading..."
                style={{ width: "200px", margin: "auto", display: "block" }}
            ></img>
        </div>
    </Fragment>
);

export default Spinner;
