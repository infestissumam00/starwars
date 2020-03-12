import { storeConstants } from 'library/common/constants';

const initialState = {
    planets: [],
    error: true
};

const PlanetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case storeConstants.FETCH_PLANETS:
            return {
                ...state,
                planets: action.payload,
                error: false
            };
        case storeConstants.PLANETS_FETCH_ERROR:
            return {
                ...state,
                planets: action.payload,
                error: true
            };
        default:
            return state;
    }
};

export default PlanetsReducer;
