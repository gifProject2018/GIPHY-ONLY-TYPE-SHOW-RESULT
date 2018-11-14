import {combineReducers} from 'redux';
import {GifsReducer} from "./gifsReducer";


export default combineReducers({
    gifs: GifsReducer,

});