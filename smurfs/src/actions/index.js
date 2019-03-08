import axios from 'axios';
/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const ADD_SMURF = 'ADD_SMURF';
export const FETCH_SMURFS = 'FETCH_SMURFS';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const UPDATE_SMURF_SUCCESS = 'UPDATE_SMURF_SUCCESS';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS });
  axios
    .get('http://localhost:3333/smurfs')
    .then(({ data }) => dispatch({ type: FETCH_SMURFS_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: REQUEST_FAILURE, payload: err }));
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF });
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(({ data }) => dispatch({ type: ADD_SMURF_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: REQUEST_FAILURE, payload: err }));
};

export const deleteSmurf = smurf => dispatch => {
  dispatch({ type: DELETE_SMURF });
  axios
    .delete(`http://localhost:3333/smurfs/${smurf.id}`)
    .then(({ data }) => dispatch({ type: DELETE_SMURF_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: REQUEST_FAILURE, payload: err }));
};

export const updateSmurf = smurf => dispatch => {
  dispatch({ type: UPDATE_SMURF });
  axios
    .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(({ data }) => dispatch({ type: UPDATE_SMURF_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: REQUEST_FAILURE, payload: err }));
};
