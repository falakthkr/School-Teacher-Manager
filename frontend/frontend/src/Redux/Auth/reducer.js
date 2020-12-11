import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE} from "./actionTypes"

export const initState = {
  token: "",
  isAuth: true,
  isLoading: false,
  isError: false,
  facultyData :[]
};

const loginReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        isError: false,
        facultyData : payload.userData
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isError: true
      };
    default:
      return state;
  }
};

export default loginReducer;
