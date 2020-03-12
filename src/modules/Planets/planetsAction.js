import axiosInstance from 'core/Axios';
import { storeConstants, URLS } from 'library/common/constants';

export const fetchPlanets = () => dispatch => {
    return axiosInstance
        .get(URLS.planets)
        .then(({ status, data }) => {
            if (status === 200) {
                let dataForStore = [];
                data.results.map((item) => {
                    let dataForStoreItem = {};
                    dataForStoreItem.name = item.name;
                    dataForStoreItem.diameter = item.diameter;
                    dataForStoreItem.rotationPeriod = item.rotation_period;
                    dataForStoreItem.orbitalPeriod = item.orbital_period;
                    dataForStoreItem.gravity = item.gravity;
                    dataForStoreItem.population = item.population;
                    dataForStoreItem.terrain= item.terrain;
                    dataForStoreItem.surfaceWater = item.surface_water;
                    dataForStoreItem.climate = item.climate;
                    dataForStore.push(dataForStoreItem);
                });
                dispatch({
                    type: storeConstants.FETCH_PLANETS,
                    payload: dataForStore,
                });
            }
        })
        .catch(() => {
            dispatch({
                type: storeConstants.PLANETS_FETCH_ERROR,
                payload: [],
            });
        });
};
