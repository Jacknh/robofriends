import {
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
  SET_SEARCH_FIELD
} from './actionTypes';

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data });
    })
    .catch(error => {
      dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error });
    })
}

export const setSearchField = (text) => {
  return {
    type: SET_SEARCH_FIELD,
    payload: text
  }
}