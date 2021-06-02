const initialState = {
    allHouse: [],
    selectedHouse: []
}
const rentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_HOUSE": {
            const newState = {
                ...state,
                allHouse: action.payload
            }
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default rentReducer;