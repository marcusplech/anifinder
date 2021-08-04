import {
    FETCH_TRENDING,
    FETCH_RATED,
    FETCH_AIRING,
    FETCH_GENRES,
    FETCH_COMING,
} from "../action-creators/types";

const INITIAL_STATE = {
    trending: [],
    rated: [],
    airing: [],
    genres: [],
    coming: [],
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
        case FETCH_COMING:
            return {
                ...state,
                coming: action.payload,
                status: action.status,
            };
        default:
            return state;
    }
};

export default reducer;
