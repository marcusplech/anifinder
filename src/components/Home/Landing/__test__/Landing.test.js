import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom";

import Landing from "../Landing";
import SignupPage from "../../../Signup/SignupPage";

describe("Tests on Landing Component", () => {
    beforeEach(() => {
        //render component
        render(
            <MemoryRouter>
                <Landing />
            </MemoryRouter>
        );
    });

    it("Check if Landing have signup Link", () => {
        const link = screen.getByRole("link", { name: /join now/i });

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", "/signup");
    });

    it("Check click sign button and render a signupPage component", () => {
        const link = screen.getByRole("link", { name: /join now/i });
        const { getByText } = render(
            <MemoryRouter>
                <SignupPage />
            </MemoryRouter>
        );

        fireEvent.click(link);
        const signup = getByText(/sign up to anilist/i);
        expect(signup).toBeVisible();
    });
});
