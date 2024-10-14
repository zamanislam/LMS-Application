import {
    FETCH_FAILURE,
    FETCH_PRODUCT,
    FETCH_SUCCESS,
    DELETE_DATA,
    UPDATE_DATA,
  } from "../redux/action";
  
  let initState = {
    data: [], // Ensure it's an array
    loading: false,
    error: "",
  };
  
  export let productReducer = (state = initState, action) => {
    switch (action.type) {
      case FETCH_PRODUCT:
        return { ...state, loading: true };
      case FETCH_SUCCESS:
        return {
          ...state,
          loading: false,
  
          data: action.payload,
        };
  
      case FETCH_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case DELETE_DATA:
        return {
          ...state,
          loading: false,
  
          data: action.payload, // Filter by id
        };
      case UPDATE_DATA:
        return {
          ...state,
          loading: false,
  
          data: action.payload,
        };
      default:
        return state;
    }
  };