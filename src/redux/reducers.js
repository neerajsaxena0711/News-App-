import { GET_NEWS, GET_NEWS_BY_SEARCH, LOADING } from './actions';

const initialState = {
    news: [],
    filteredNews: [],
    isLoading : true,
}

function newsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_NEWS:
            return { ...state, news: action.payload };
        case GET_NEWS_BY_SEARCH:
            return { ...state, filteredNews: action.payload };
        case LOADING:
                return { ...state, isLoading: action.payload };
        default:
            return state;
    }
}

// function newsBySearchReducer(state=initialState, action){
//     switch (action.type){
//         case GET_NEWS: 
//             return {...state, filteredNews: action.payload}; 
//         default:
//             return state;
//     }
// }

export default newsReducer;