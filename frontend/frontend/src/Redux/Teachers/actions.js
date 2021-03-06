import {
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE,
    GET_DATA_REQUEST,
    GET_SEARCH_REQUEST,
    GET_SEARCH_SUCCESS,
    GET_SEARCH_FAILURE,
    GET_MALE_FILTER_SUCCESS,
    GET_MALE_FILTER_REQUEST,
    GET_MALE_FILTER_FAILURE,
    GET_FEMALE_FILTER_SUCCESS,
    GET_FEMALE_FILTER_REQUEST,
    GET_FEMALE_FILTER_FAILURE,
    GET_PAGE_SUCCESS,
    GET_PAGE_FAILURE,
    GET_PAGE_REQUEST,
    GET_AGE_SORT_SUCCESS,
    GET_AGE_SORT_FAILURE,
    GET_AGE_SORT_REQUEST
} from "./actionTypes"

import axios from "axios"

export const getDataSuccess = (payload) => {
    return{
        TYPE : GET_DATA_SUCCESS,
        payload
    }
}

export const getDataFailure = (payload) => {
    return{
        TYPE : GET_DATA_FAILURE,
        payload
    }
}

export const getDataRequest= (payload) => {
    return{
        TYPE : GET_DATA_REQUEST,
        payload
    }
}

export const getData = (payload) => (dispatch) => {
    console.log(payload)
    const {limit,page} = payload
    dispatch(getDataRequest())
    return axios.get(`http://localhost:5000/teachers?_page=${page}&_limit=${limit}`)
    .then(res=>dispatch(getDataSuccess(res)))
    .catch(err=>dispatch(getDataFailure(err)))
}

export const getSearchRequest = (payload) => {
    return{
        TYPE: GET_SEARCH_REQUEST,
        payload
    }
}

export const getSearchFailure = (payload) => {
    return{
        TYPE : GET_SEARCH_FAILURE,
        payload
    }
}

export const getSearchSuccess = (payload) => {
    return{
        TYPE : GET_SEARCH_SUCCESS,
        payload
    }
}

export const getSearch = (payload) => (dispatch) => {
    console.log(payload)
    const {search} = payload
    dispatch(getSearchRequest())
    return axios.get(`http://localhost:5000/teachers?first_name=${search}`)
    .then(res=>dispatch(getSearchSuccess(res)))
    .then(getData())
    .catch(err=>dispatch(getSearchFailure(err)))
}

export const getFemaleFilterSuccess = (payload) => {
    return{
        TYPE :  GET_FEMALE_FILTER_SUCCESS,
        payload
    }
}

export const getFemaleFilterRequest = (payload) => {
    return{
        TYPE : GET_FEMALE_FILTER_REQUEST,
        payload
    }
}

export const getFemaleFilterFailure = (payload) => {
    return{ 
        TYPE :  GET_FEMALE_FILTER_FAILURE,
        payload
    }
}

export const getFemaleFilter = (payload) => (dispatch) => {
    console.log(payload)
    dispatch(getFemaleFilterRequest())
    return axios.get(`http://localhost:5000/teachers?gender=Female`)
    .then(res=>dispatch(getFemaleFilterSuccess(res)))
    .then(getData())
    .catch(err=>dispatch(getFemaleFilterFailure(err)))
}

export const getMaleFilterSuccess = (payload) => {
    return{
        TYPE :  GET_MALE_FILTER_SUCCESS,
        payload
    }
}

export const getMaleFilterRequest = (payload) => {
    return{
        TYPE : GET_MALE_FILTER_REQUEST,
        payload
    }
}

export const getMaleFilterFailure = (payload) => {
    return{ 
        TYPE :  GET_MALE_FILTER_FAILURE,
        payload
    }
}

export const getMaleFilter = (payload) => (dispatch) => {
    console.log(payload)
    dispatch(getMaleFilterRequest())
    return axios.get(`http://localhost:5000/teachers?gender=Male`)
    .then(res=>dispatch(getMaleFilterSuccess(res)))
    .then(getData())
    .catch(err=>dispatch(getMaleFilterFailure(err)))
}

export const getPageSuccess = (payload) => {
    return{
        TYPE : GET_PAGE_SUCCESS,
        payload
    }
}

export const getPageRequest = (payload) => {
    return{
        TYPE : GET_PAGE_REQUEST,
        payload
    }
}

export const getPageFailure = (payload) => {
    return{
        TYPE : GET_PAGE_FAILURE,
        payload
    }
}

export const getPage = (payload) => (dispatch) => {
    console.log(payload)
    const{page,limit} = payload
    dispatch(getPageRequest())
    return axios.get(`http://localhost:5000/teachers?_page=${page}&_limit=${limit}`)
    .then(res=>dispatch(getPageSuccess(res)))
    .then(res=>getData(res))
    .catch(err=>dispatch(getPageFailure(err)))
}

export const getAgeSortSuccess = (payload) => {
    return{
        TYPE : GET_AGE_SORT_SUCCESS,
        payload
    }
}

export const getAgeSortFailure = (payload) => {
    return{
        TYPE : GET_AGE_SORT_FAILURE,
        payload
    }
}

export const getAgeSortRequest = (payload) => {
    return{
        TYPE : GET_AGE_SORT_REQUEST,
        payload
    }
}

export const getAgeSort = (payload) => (dispatch) => {
    console.log(payload)
    const{page,limit} = payload
    dispatch(getAgeSortRequest())
    return axios.get(`http://localhost:5000/teachers?_page=${page}&_limit=${limit}&_sort=age&_order=asc`)
    .then(res=>dispatch(getAgeSortSuccess(res)))
    .then(res=>getData(res))
    .catch(err=>dispatch(getAgeSortFailure(err)))
}