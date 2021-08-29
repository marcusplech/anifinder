import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "whatwg-fetch";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import Search from "../Search";
import { store } from "../../../../state/store";

describe("Tests on Search Component", () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <Search />
            </Provider>
        );
    });

    it("check input and icon search", () => {
        const search = screen.getByText(/search/i);
        expect(search).toBeInTheDocument();

        const icon = screen.getByRole("img", { name: /icon-search/i });
        expect(icon).toBeVisible();

        const searchInput = screen.queryByPlaceholderText("Search...");
        expect(searchInput).toBeInTheDocument();
        fireEvent.change(searchInput, { target: { value: "test" } });
        expect(searchInput.value).toBe("test");
    });
});
