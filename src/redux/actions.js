import { APIKEY, BASE_URL, SECRET } from "../Constants";

export const GET_NEWS = "GET_NEWS";
export const GET_NEWS_BY_SEARCH = "GET_NEWS_BY_SEARCH";
export const LOADING = "loading";

export const getNews = () => {
    try {
        return async dispatch => {
            const result = await fetch(`${BASE_URL}top-headlines?country=in&category=business&apiKey=${APIKEY}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': SECRET
                }
            });
            const json = await result.json();
            console.log('The news is', json);
            if (json) {
                dispatch({
                    type: GET_NEWS,
                    payload: json
                });
                dispatch(loading(false));
            } else {
                dispatch(loading(false));
                console.log('Some error occured!');
            }
        }
    } catch {
        console.log('Some error occured!');
    }
};

export const getNewsBySearch = (query, yesterday, today) => {
    try {
        return async dispatch => {
            const result = await fetch(`${BASE_URL}everything?q=${query}&from=${yesterday}&to=${today}&sortBy=popularity`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': SECRET
                }
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_NEWS,
                    payload: json
                });
            } else {
                console.log('Some error occured!');
            }
        }
    } catch {
        console.log('Some error occured');
    } 
};

export const loading = (data) => {
    return dispatch => {
        dispatch({
            type: LOADING,
            payload: data
        });
    }
}