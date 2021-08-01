const selectors = {
    getTrending: (state) => state.fetch.trending,
    getGenres: (state) => state.fetch.genres,
    getRated: (state) => state.fetch.rated,
    getAiring: (state) => state.fetch.airing,
};

export { selectors };
