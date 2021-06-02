export const loadHouse = () => {

    return (dispatch, getState) => {
        fetch('https://mocki.io/v1/fb6e4dc1-0a0f-4257-aa18-6d35f987d3d3')
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: 'LOAD_HOUSE',
                    payload: data
                })
            })
    }
}
export const findDetails = (payload) => {
    return async (dispatch) => {
        await dispatch({
            type: 'HOUSE_DETAILS',
            payload
        })
    }

}