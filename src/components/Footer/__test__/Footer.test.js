import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import Footer from "../Footer";

it("Render component", () => {
    render(<Footer />, { wrapper: MemoryRouter });
});
