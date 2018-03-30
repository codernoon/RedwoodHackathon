const initialState = {
    reviews: [],
}

const rootReducer = (state = initialState, action) => {
    if (action.type == 'LOAD_API') {
        state = {
            ...state,
            reviews: action.payload
        }
        console.log(state.reviews);
    }
    if (action.type == 'ADD_REVIEW') {
        state = {
            ...state,
            reviews: action.payload
        }
        console.log(state.reviews);
    }
    return state;
}

export default rootReducer