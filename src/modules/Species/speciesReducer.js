import { storeConstants } from 'library/common/constants';

const initialState = {
    species: [],
    error: true
};

const SpeciesReducer = (state = initialState, action) => {
    switch (action.type) {
        case storeConstants.FETCH_SPECIES:
            return {
                ...state,
                species: action.payload,
                error: false
            };
        case storeConstants.SPECIES_FETCH_ERROR:
            return {
                ...state,
                species: action.payload,
                error: true
            };
        default:
            return state;
    }
};

export default SpeciesReducer;
