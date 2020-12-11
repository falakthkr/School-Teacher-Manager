import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE} from "./actionTypes"
import axios from 'axios'

export const loginRequest = (payload) => ({
    type:LOGIN_REQUEST,
    payload
})

export const loginSuccess = (payload) => ({
    type:LOGIN_SUCCESS,
    payload
})

export const loginFailure = (payload) => ({
    type:LOGIN_FAILURE,
    payload
})

export const checkLoginDetails = (payload) => dispatch => {
    console.log(payload)
    dispatch(loginRequest())
    return axios.get("http://localhost:5000/users")
    .then(res=>(res.data))
    .then(res=>{
        let current = res.find(item=>item.username==payload.username)
        console.log(current)
        if(current.password==payload.password){
            return dispatch(loginSuccess({userData:current}))
        }
        return dispatch(loginFailure({message:"Error"}))
    })
}

