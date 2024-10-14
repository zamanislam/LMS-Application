import axios from "axios";

export const FETCH_PRODUCT = "FETCH_PRODUCT";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const DELETE_DATA = "DELETE_DATA";
export const UPDATE_DATA = "UPDATE_DATA";

export const getProduct = (order) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCT });

    try {
      let res = await axios.get(
       "https://users-fd9bb-default-rtdb.asia-southeast1.firebasedatabase.app/Courses.json"
      );
      let data = Object.entries(res.data).map(([id, value]) => ({
        id,
        ...value,
      }));

    //   if (order === "asc") {
    //     data = data.sort((a, b) => a.price - b.price);
    //   } else if (order === "desc") {
    //     data = data.sort((a, b) => b.price - a.price);
    //   }

      dispatch({ type: FETCH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_FAILURE, payload: error.message });
    }
  };
};

export const deleteData = (id) => {
  return async (dispatch) => {
    try {
      let res = await axios.delete(
        `https://users-fd9bb-default-rtdb.asia-southeast1.firebasedatabase.app/Courses/${id}.json`
      );
      dispatch(getProduct());
    } catch (error) {
      dispatch({ type: FETCH_FAILURE, payload: error.message });
    }
  };
};

// Update product action
export const updateData = (payload) => {
  return async (dispatch) => {
    const { id, obj } = payload;
    try {
      let response = await axios.patch(
        `https://users-fd9bb-default-rtdb.asia-southeast1.firebasedatabase.app/Courses/${id}.json`,
        obj
      );

      dispatch({ type: UPDATE_DATA, payload: response.data });
      dispatch(getProduct());
    } catch (error) {
      dispatch({ type: FETCH_FAILURE, payload: error.message });
    }
  };
};