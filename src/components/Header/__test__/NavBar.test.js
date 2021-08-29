import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "../../../state/store";

import NavBar from "../NavBar";
import Home from "../../Home/Home";

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

        fireEvent.click(logoDom);

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
});
