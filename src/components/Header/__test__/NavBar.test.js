import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router";

import NavBar from "../NavBar";

it("Render component", () => {
    render(<NavBar />, { wrapper: MemoryRouter });
});

const link = [{ text: "Sign Up", location: "/signup" }];

test.each(link)("Check if Nav Bar have %s link.", (link) => {
    render(<NavBar />, { wrapper: MemoryRouter });
    //Ensure the text is in the dom, will throw error it can't find
    const linkDom = screen.getByText(link.text);

    //use jest assertion to verify the link property
    expect(linkDom).toHaveAttribute("href", link.location);
});

test("Check if have logo and link to home page", () => {
    render(<NavBar />, { wrapper: MemoryRouter });
    // get by TestId define in the navBar
    const logoDom = screen.getByTestId(/icon-logo/);
    // check the link location
    expect(logoDom).toHaveAttribute("href", "/");
    //check the logo image
    expect(screen.getByAltText(/icon logo/)).toBeInTheDocument();
});
