import {
    FETCH_TRENDING,
    FETCH_RATED,
    FETCH_AIRING,
    FETCH_GENRES,
    FETCH_COMING,
    FETCH_POPULARITY,
} from "../action-creators/types";


interface State {
    trending: string[],
    rated: string[],
    airing: string[],
    genres: string[],
    coming: string[],
    popylarity: string[],
}

const INITIAL_STATE = {
    trending: [],
    rated: [],
    airing: [],
    genres: [],
    coming: [],
    popylarity: [],
};

interface Action {
    type: string;
    payload: unknown;
    status: string;
}


const reducer = (state: State = INITIAL_STATE, action: Action) => {
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

        case FETCH_POPULARITY:
            return {
                ...state,
                popularity: action.payload,
                status: action.status,
            };

        default:
            return state;
    }
};

export default reducer;
