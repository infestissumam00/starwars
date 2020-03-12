import { storeConstants } from 'library/common/constants';

const initialState = {
    movies: [],
    error: true
};

const MoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case storeConstants.FETCH_FILMS:
            return {
                ...state,
                movies: action.payload,
                error: false
            };
        case storeConstants.FILMS_FETCH_ERROR:
            return {
                ...state,
                movies: action.payload,
                error: true,
            };
        default:
            return state;
    }
};

export default MoviesReducer;
