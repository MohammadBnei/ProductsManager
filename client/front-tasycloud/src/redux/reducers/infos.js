const initialState = {
    infos: [],
    info: {}
}

export default (state=initialState, action) => {
    switch (action.type) {
        case 'LOAD_INFOS' :
        return {
            ...state,
            infos: action.infos
        }
        case 'VIEW_INFO':
        return {
            ...state,
            info: action.info
        }
        default:
            return state
    }
}