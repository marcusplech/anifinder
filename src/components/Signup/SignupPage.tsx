"use client";
import React, { useEffect } from "react";
import Form from "./Form";

const SignupPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-[60px] min-h-screen">
      <div className="mx-auto min-w-[320px] max-w-[400px] rounded-[14px] border border-slate-900/[0.06] bg-white px-10 py-10 text-center shadow-[0_12px_40px_rgba(15,23,42,0.1)] max-[760px]:mx-0 max-[760px]:max-w-full">
        <div className="my-5 mb-[60px] text-center font-[family-name:var(--font-roboto),sans-serif] text-2xl font-semibold text-slate-900">
          Crie sua conta no AniFinder
        </div>
        <Form />
      </div>
    </div>
  );
};

export default SignupPage;
