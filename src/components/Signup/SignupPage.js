import React, { useEffect } from "react";
import Form from "./Form";

const SignupPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="form-content">
            <div className="form-container">
                <div className="form-title">Sign up to AniList</div>
                <Form />
            </div>
        </div>
    );
};

export default SignupPage;
