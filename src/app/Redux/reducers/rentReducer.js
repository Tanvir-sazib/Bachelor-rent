const initialState = {
    allHouse: [],
    houseDetails: {},
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
        case "HOUSE_DETAILS": {
            const newState = {
                ...state,
                houseDetails: state.allHouse.find(house => house.id === action.payload)
            }
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default rentReducer;