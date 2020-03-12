import axiosInstance from 'core/Axios';
import { storeConstants, URLS } from 'library/common/constants';

export const fetchPeople = () => dispatch => {
    return axiosInstance
        .get(URLS.people)
        .then(({ status, data }) => {
            if (status === 200) {
                let dataForStore = [];
                data.results.map((item) => {
                    let dataForStoreItem = {};
                    dataForStoreItem.name = item.name;
                    dataForStoreItem.birthYear = item.birth_year;
                    dataForStoreItem.eyeColor = item.eye_color;
                    dataForStoreItem.gender = item.gender;
                    dataForStoreItem.hairColor = item.hair_color;
                    dataForStoreItem.height = item.height;
                    dataForStoreItem.mass = item.mass;
                    dataForStoreItem.skinColor = item.skin_color;
                    dataForStore.push(dataForStoreItem);
                });
                dispatch({
                    type: storeConstants.FETCH_PEOPLE,
                    payload: dataForStore,
                });
            }
        })
        .catch(() => {
            dispatch({
                type: storeConstants.PEOPLE_FETCH_ERROR,
                payload: [],
            });
        });
};
