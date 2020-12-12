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

export const initState = {
    currentData = [],
    isLoading : false,
    isError : false
}

const reducer = (state=initState,{type,payload}) => {
    switch(type){
        case GET_DATA_SUCCESS:
            console.log("get data success : " + payload)
            return{
                ...state,
                isLoading : false,
                currentData : payload
            };
        case GET_DATA_FAILURE:
            return{
                ...state,
                isError : true
            }
        case GET_DATA_REQUEST:
            return{
                ...state,
                isLoading : true
            }
        case GET_SEARCH_FAILURE:
            return{
                ...state,
                isError :  true
            }
        case GET_SEARCH_REQUEST:
            return{
                ...state,
                isLoading : true
            }
        case GET_SEARCH_SUCCESS:
            console.log("get search success : " + payload)
            return{
                ...state,
                isLoading : false,
                currentData: payload
            }
        case GET_MALE_FILTER_FAILURE:
            return{
                ...state,
                isError : true
            }
        case GET_MALE_FILTER_REQUEST:
            return{
                ...state,
                isLoading : true
            }
        case GET_MALE_FILTER_SUCCESS:
            console.log("get male filter success : " + payload)
            return{
                ...state,
                isLoading : false,
                isError : false,
                currentData : payload
            }
        case GET_FEMALE_FILTER_FAILURE:
            return{
                ...state,
                isError : true
            }
        case GET_FEMALE_FILTER_REQUEST:
            return{
                ...state,
                isLoading : true
            }
        case GET_FEMALE_FILTER_SUCCESS:
            console.log("get female filter success : " + payload)
            return{
                ...state,
                currentData : payload
            }
        case GET_PAGE_FAILURE:
            return{
                ...state,
                isError : true
            }
        case GET_PAGE_REQUEST:
            return{
                ...state,
                isLoading : true
            }
        case GET_PAGE_SUCCESS : 
            console.log("get page success : " + payload)
            return{
                ...state,
                currentData : payload
            }
        case GET_AGE_SORT_REQUEST:
            return{
                ...state,
                isLoading : true
            }
        case GET_AGE_SORT_FAILURE:
            return{
                ...state,
                isError : true
            }
        case GET_AGE_SORT_SUCCESS:
            console.log("get age sort success : " + payload)
            return{
                ...state,
                currentData : payload
            }
    }
}