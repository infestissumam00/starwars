import axiosInstance from 'core/Axios';
import { storeConstants, URLS } from 'library/common/constants';

export const fetchFilms = () => dispatch => {
    return axiosInstance
        .get(URLS.films)
        .then(({ status, data }) => {
            if (status === 200) {
                let dataForStore = [];
                data.results.map((item) => {
                    let dataForStoreItem = {};
                    dataForStoreItem.title = item.title;
                    dataForStoreItem.summary = item.opening_crawl;
                    dataForStoreItem.director = item.director;
                    dataForStoreItem.producer = item.producer;
                    dataForStoreItem.releaseDate = item.release_date;
                    dataForStore.push(dataForStoreItem);
                });
                dispatch({
                    type: storeConstants.FETCH_FILMS,
                    payload: dataForStore,
                });
            }
        })
        .catch(() => {
            dispatch({
                type: storeConstants.FILMS_FETCH_ERROR,
                payload: [],
            });
        });
};
