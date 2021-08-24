import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router";

import NavBar from "../NavBar";

describe("All tests on NavBar Component", () => {
    beforeEach(() => {
        // render component
        render(<NavBar />, { wrapper: MemoryRouter });
    });

    it("Check if NavBar have signup link", () => {
        const linkDom = screen.getByText(/sign up/i);

        expect(linkDom).toHaveAttribute("href", "/signup");
    });

    it("Check if have logo and link to home page", () => {
        const logoDom = screen.getByRole("link", { name: /icon logo/i });
        // check the link location
        expect(logoDom).toHaveAttribute("href", "/");
        //check the logo image
        expect(
            screen.getByRole("img", { name: /icon logo/i })
        ).toBeInTheDocument();
    });
});
