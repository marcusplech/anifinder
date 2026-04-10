"use client";
import React, { useEffect } from "react";
import Form from "./Form";

const SignupPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="form-content">
      <div className="form-container">
        <div className="form-title">Crie sua conta no AniFinder</div>
        <Form />
      </div>
    </div>
  );
};

export default SignupPage;
