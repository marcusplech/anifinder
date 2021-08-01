import {
    FETCH_TRENDING,
    FETCH_RATED,
    FETCH_AIRING,
    FETCH_GENRES,
} from "./types";

// Buscas iniciais

export const fetchShowTrending = async (dispatch) => {
    try {
        fetch("https://kitsu.io/api/edge/trending/anime?limit=20?")
            .then((data) => data.json())
            .then((data) =>
                dispatch({ type: FETCH_TRENDING, payload: data.data })
            );
    } catch (error) {
        console.log(error);
    }
};
export const fetchShowRated = async (dispatch) => {
    console.log("AQUI FETCH_RATED");
    try {
        fetch(
            "https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=5&sort=-averageRating"
        )
            .then((data) => data.json())
            .then((data) =>
                dispatch({ type: FETCH_RATED, payload: data.data })
            );
    } catch (error) {
        console.log(error);
    }
};
export const fetchShowAiring = async (dispatch) => {
    console.log("AQUI FETCH_AIRING");
    try {
        fetch(
            "https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0&sort=-startDate&sort=-averageRating"
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
    console.log("AQUI FETCH_genrES");
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
