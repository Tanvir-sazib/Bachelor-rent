export const loadHouse = () => {

    return (dispatch, getState) => {
        fetch('https://mocki.io/v1/21d10cb2-4e43-4282-b482-7539741146ae')
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
    return ({
        type: 'HOUSE_DETAILS',
        payload
    })
}