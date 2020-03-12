import axiosInstance from 'core/Axios';
import { storeConstants, URLS } from 'library/common/constants';

export const fetchSpecies = () => dispatch => {
    return axiosInstance
        .get(URLS.species)
        .then(({ status, data }) => {
            if (status === 200) {
                let dataForStore = [];
                data.results.map((item) => {
                    let dataForStoreItem = {};
                    dataForStoreItem.name = item.name;
                    dataForStoreItem.classification = item.classification;
                    dataForStoreItem.designation = item.designation;
                    dataForStoreItem.averageHeight = item.average_height;
                    dataForStoreItem.averageLifespan = item.average_lifespan;
                    dataForStoreItem.language = item.language;
                    dataForStoreItem.skinColor = item.skin_colors;
                    dataForStoreItem.eyeColor = item.eye_colors;
                    dataForStoreItem.hairColor = item.hair_colors;
                    dataForStore.push(dataForStoreItem);
                });
                dispatch({
                    type: storeConstants.FETCH_SPECIES,
                    payload: dataForStore,
                });
            }
        })
        .catch(() => {
            dispatch({
                type: storeConstants.SPECIES_FETCH_ERROR,
                payload: [],
            });
        });
};
