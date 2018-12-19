import axios from 'axios'
const url = "http://localhost:8080/"

export function loadRestaurants () {
    return (dispatch) => {
        fetch(`/restaurants`)
        .then(res => Response.json())
    }
}

export function loadProducts () {
    return (dispatch) => {
        axios.get(`${url}products`)
        .then((res) => {
            let products = res.data
            dispatch({type:'LOAD_RESTAURANTS', products})
        }).catch((err) => {
            console.log(err)
        })
    }
}
export function getProduct (_id) {
    return axios.get(`${url}productr/${_id}`).then((res)=>{
        return res.data
    }).catch(err=>console.log(err))
}

export function getRestaurant (_id) {
    return (dispatch) => {
        axios.get(`${url}restaurant/${_id}`)
        .then((res) => {
            let restaurant = res.data
            dispatch({type: 'VIEW_RESTAURANT', restaurant})
        }).catch((err) => console.log(err))
    }
}