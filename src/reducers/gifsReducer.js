
export function GifsReducer (state = {gifs: []}, action) {
    switch (action.type) {
        case "GET_GIFS":
            let tmp_gifs = [];
            for (let i = 0; i < action.payload.data.length; i++) {
                tmp_gifs.push({id: action.payload.data[i].id, image: action.payload.data[i].images.fixed_height_small});
            }
            return { ...state, gifs: tmp_gifs };
            break;
        case "GET_GIFS_REJECTED":
            console.log(action.payload);
            return state;
        default:
            return state;
    }
    return state;
}