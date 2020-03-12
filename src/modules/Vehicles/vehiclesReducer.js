import { storeConstants } from 'library/common/constants';

const initialState = {
    vehicles: [],
    error: true,
};

const VehiclesReducer = (state = initialState, action) => {
    switch (action.type) {
        case storeConstants.FETCH_VEHICLES:
            return {
                ...state,
                vehicles: action.payload,
                error: false,
            };
        case storeConstants.VEHICLES_FETCH_ERROR:
            return {
                ...state,
                vehicles: action.payload,
                error: true,
            };
        default:
            return state;
    }
};

export default VehiclesReducer;
