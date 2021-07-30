import {
    FETCH_TRENDING,
    FETCH_RATED,
    FETCH_AIRING,
    FETCH_GENRES,
} from "./types";

// Todas as buscas iniciais
export const fetchShowCaseContent = () => (dispatch) => {
    fetch("https://kitsu.io/api/edge/trending/anime?limit=20?")
        .then((res) => res.json())
        .then((anime) => {
            dispatch({
                type: FETCH_TRENDING,
                payload: anime.data,
                status: "done",
            });
        });

    fetch(
        "https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=5&sort=-averageRating"
    )
        .then((res) => res.json())
        .then((anime) =>
            dispatch({
                type: FETCH_RATED,
                payload: anime.data,
                status: "done",
            })
        );

    fetch(
        `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0&sort=-startDate&sort=-averageRating`
    )
        .then((res) => res.json())
        .then((anime) =>
            dispatch({
                type: FETCH_AIRING,
                payload: anime.data,
                status: "done",
            })
        );
};

//

export const fetchGenres = () => (dispatch) => {
    fetch(
        "https://kitsu.io/api/edge/genres?page%5Blimit%5D=20&page%5Boffset%5D=0"
    )
        .then((res) => res.json())
        .then((anime) => {
            dispatch({
                type: FETCH_GENRES,
                payload: anime.data,
                status: "done",
            });
        });
};
