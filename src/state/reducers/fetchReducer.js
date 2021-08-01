import {
    FETCH_TRENDING,
    FETCH_RATED,
    FETCH_AIRING,
    FETCH_GENRES,
} from "../action-creators/types";

const INITIAL_STATE = {
    trending: [],
    rated: [],
    airing: [],
    genres: [],
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_TRENDING:
            return {
                ...state,
                trending: action.payload,
                status: action.status,
            };

        case FETCH_RATED:
            return {
                ...state,
                rated: action.payload,
                status: action.status,
            };
        case FETCH_AIRING:
            return {
                ...state,
                airing: action.payload,
                status: action.status,
            };
        case FETCH_GENRES:
            return {
                ...state,
                genres: action.payload,
                status: action.status,
            };
        default:
            return state;
    }
};

export default reducer;
