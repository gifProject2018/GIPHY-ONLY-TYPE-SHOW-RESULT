import axios from 'axios/index';
import {root_url, search_path, api_key} from '../constants/url';

export function getGifs(item) {
    return function(dispatch) {
        axios.get(`${root_url}${search_path}?api_key=${api_key}&q=${item}`)
            .then((response) => {
                dispatch({type: "GET_GIFS", payload: response.data});
            })
            .catch((error) => {
                dispatch({type: "GET_GIFS_REJECTED", payload: error});
            })
    }
}