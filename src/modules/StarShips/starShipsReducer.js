import { storeConstants } from 'library/common/constants';

const initialState = {
    starShips: [],
    error: true,
};

const StarShipsReducer = (state = initialState, action) => {
    switch (action.type) {
        case storeConstants.FETCH_STARSHIPS:
            return {
                ...state,
                starShips: action.payload,
                error: false
            };
        case storeConstants.STARSHIPS_FETCH_ERROR:
            return {
                ...state,
                starShips: action.payload,
                error: true
            };
        default:
            return state;
    }
};

export default StarShipsReducer;
