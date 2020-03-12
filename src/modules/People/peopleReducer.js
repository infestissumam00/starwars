import { storeConstants } from 'library/common/constants';

const initialState = {
    people: [],
    error: true
};

const PeopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case storeConstants.FETCH_PEOPLE:
            return {
                ...state,
                people: action.payload,
                error: false
            };
        case storeConstants.PEOPLE_FETCH_ERROR:
            return {
                ...state,
                people: action.payload,
                error: true
            };
        default:
            return state;
    }
};

export default PeopleReducer;
