import axiosInstance from 'core/Axios';
import { storeConstants, URLS } from 'library/common/constants';

export const fetchStarShips = () => dispatch => {
    return axiosInstance
        .get(URLS.starships)
        .then(({ status, data }) => {
            if (status === 200) {
                let dataForStore = [];
                data.results.map((item) => {
                    let dataForStoreItem = {};
                    dataForStoreItem.name = item.name;
                    dataForStoreItem.model = item.model;
                    dataForStoreItem.starShipClass = item.starship_class;
                    dataForStoreItem.manufacturer = item.manufacturer;
                    dataForStoreItem.costInCredits = item.cost_in_credits;
                    dataForStoreItem.length= item.length;
                    dataForStoreItem.crew = item.crew;
                    dataForStoreItem.passengers = item.passengers;
                    dataForStoreItem.maxAtmospheringSpeed = item.max_atmosphering_speed;
                    dataForStoreItem.hyperdriveRating = item.hyperdrive_rating;
                    dataForStoreItem.mglt = item.MGLT;
                    dataForStoreItem.cargoCapacity = item.cargo_capacity;
                    dataForStoreItem.conumables = item.consumables;
                    dataForStore.push(dataForStoreItem);
                });
                dispatch({
                    type: storeConstants.FETCH_STARSHIPS,
                    payload: dataForStore,
                });
            }
        })
        .catch(() => {
            dispatch({
                type: storeConstants.STARSHIPS_FETCH_ERROR,
                payload: [],
            });
        });
};
