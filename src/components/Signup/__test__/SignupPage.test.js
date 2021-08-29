import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../../../state/store";

import Home from "../../Home/Home";
import Signup from "../Signup";
import SignupPage from "../SignupPage";

describe("Tests on Form Component", () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <SignupPage />
            </MemoryRouter>
        );
    });

    it("updates on change input email value", () => {
        const emailInput = screen.queryByPlaceholderText("Email");

        fireEvent.change(emailInput, { target: { value: "test" } });

        expect(emailInput.value).toBe("test");
    });

    it("updates on change input username value", () => {
        const useranemInput = screen.queryByPlaceholderText("Username");

        fireEvent.change(useranemInput, { target: { value: "test" } });

        expect(useranemInput.value).toBe("test");
    });

    it("updates on change input password value", () => {
        const passwordInput = screen.queryByPlaceholderText("Password");

        fireEvent.change(passwordInput, { target: { value: "test" } });

        expect(passwordInput.value).toBe("test");
    });

    it("updates on change input confirm password value", () => {
        const confirmInput = screen.queryByPlaceholderText("Confirm Password");

        fireEvent.change(confirmInput, { target: { value: "test" } });

        expect(confirmInput.value).toBe("test");
    });

    it("Check if have a button back to home", () => {
        const button = screen.getByRole("button", { name: /back to home/i });

        expect(button).toBeInTheDocument();

        fireEvent.click(button);
        const { getByRole } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <Home />
                </MemoryRouter>
            </Provider>
        );
        const landing = getByRole("heading", {
            name: /the next-generation anime platform/i,
        });

        expect(landing).toBeInTheDocument();
    });

    it("Check if have a button signup", () => {
        const button = screen.getByRole("button", { name: /sign up/i });
        expect(button).toBeInTheDocument();
        expect(button).toBeDisabled();
    });

    it("type all inputs for enable a signup button and render signup component", () => {
        const emailInput = screen.queryByPlaceholderText("Email");
        const useranemInput = screen.queryByPlaceholderText("Username");
        const passwordInput = screen.queryByPlaceholderText("Password");
        const confirmInput = screen.queryByPlaceholderText("Confirm Password");
        const button = screen.getByRole("button", { name: /sign up/i });

        fireEvent.change(emailInput, { target: { value: "test" } });
        fireEvent.change(useranemInput, { target: { value: "test" } });
        fireEvent.change(passwordInput, { target: { value: "test" } });
        fireEvent.change(confirmInput, { target: { value: "test" } });

        expect(button).toBeEnabled();
        fireEvent.click(button);
        const { getAllByText } = render(<Signup />);
        const modal = getAllByText("Please note");
        expect(modal).toBeTruthy();
    });
});
