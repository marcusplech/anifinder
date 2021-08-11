import {
    FETCH_TRENDING,
    FETCH_RATED,
    FETCH_AIRING,
    FETCH_GENRES,
    FETCH_COMING,
} from "./types";

// Buscas iniciais

export const fetchShowTrending = async (dispatch) => {
    try {
        fetch("https://kitsu.io/api/edge/trending/anime?limit=6?")
            .then((data) => data.json())
            .then((data) =>
                dispatch({ type: FETCH_TRENDING, payload: data.data })
            );
    } catch (error) {
        console.log(error);
    }
};
export const fetchShowRated = async (dispatch) => {
    try {
        fetch(
            "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=5&sort=-averageRating"
        )
            .then((data) => data.json())
            .then((data) =>
                dispatch({ type: FETCH_RATED, payload: data.data })
            );
    } catch (error) {
        console.log(error);
    }
};

export const fetchShowComing = async (dispatch) => {
    try {
        fetch(
            "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=5&sort=-startDate"
        )
            .then((data) => data.json())
            .then((data) =>
                dispatch({ type: FETCH_COMING, payload: data.data })
            );
    } catch (error) {
        console.log(error);
    }
};

export const fetchShowAiring = async (dispatch) => {
    try {
        fetch(
            "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=0&sort=-startDate&sort=-averageRating"
        )
            .then((data) => data.json())
            .then((data) =>
                dispatch({ type: FETCH_AIRING, payload: data.data })
            );
    } catch (error) {
        console.log(error);
    }
};

export const fetchShowGenres = async (dispatch) => {
    try {
        fetch(
            "https://kitsu.io/api/edge/genres?page%5Blimit%5D=20&page%5Boffset%5D=0"
        )
            .then((data) => data.json())
            .then((data) =>
                dispatch({ type: FETCH_GENRES, payload: data.data })
            );
    } catch (error) {
        console.log(error);
    }
};
