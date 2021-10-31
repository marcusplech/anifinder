const selectors = {
    getAnimes: (state: { fetch: any; }) => state.fetch,
    getTrending: (state: { fetch: { trending: any; }; }) => state.fetch.trending,
    getGenres: (state: { fetch: { genres: string; }; }) => state.fetch.genres,
    getRated: (state: { fetch: { rated: any; }; }) => state.fetch.rated,
    getAiring: (state: { fetch: { airing: any; }; }) => state.fetch.airing,
    getComing: (state: { fetch: { coming: any; }; }) => state.fetch.coming,
    getPopularity: (state: { fetch: { popularity: any; }; }) => state.fetch.popularity,
};

export { selectors };
