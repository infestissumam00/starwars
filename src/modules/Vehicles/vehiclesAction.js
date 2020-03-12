import axiosInstance from 'core/Axios';
import { storeConstants, URLS } from 'library/common/constants';

export const fetchVehicles = () => dispatch => {
    return axiosInstance
        .get(URLS.vehicles)
        .then(({ status, data }) => {
            if (status === 200) {
                let dataForStore = [];
                data.results.map((item) => {
                    let dataForStoreItem = {};
                    dataForStoreItem.name = item.name;
                    dataForStoreItem.model = item.model;
                    dataForStoreItem.vehicleClass = item.vehicle_class;
                    dataForStoreItem.manufacturer = item.manufacturer;
                    dataForStoreItem.costInCredits = item.cost_in_credits;
                    dataForStoreItem.length= item.length;
                    dataForStoreItem.crew = item.crew;
                    dataForStoreItem.passengers = item.passengers;
                    dataForStoreItem.maxAtmospheringSpeed = item.max_atmosphering_speed;
                    dataForStoreItem.cargoCapacity = item.cargo_capacity;
                    dataForStoreItem.conumables = item.consumables;
                    dataForStore.push(dataForStoreItem);
                });
                dispatch({
                    type: storeConstants.FETCH_VEHICLES,
                    payload: dataForStore,
                });
            }
        })
        .catch(() => {
            dispatch({
                type: storeConstants.VEHICLES_FETCH_ERROR,
                payload: [],
            });
        });
};
