const initialState = {
    restaurants: [],
    restaurant: {}
}

export default (state=initialState, action) => {
    switch (action.type) {
        case 'LOAD_RESTAURANTS' :
        return {
            ...state,
            restaurants: action.restaurants
        }
        case 'VIEW_RESTAURANT':
        return {
            ...state,
            restaurant: action.restaurant
        }
        default:
            return state
    }
}