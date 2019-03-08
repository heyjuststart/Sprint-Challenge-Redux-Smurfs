/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  ADD_SMURF,
  FETCH_SMURFS,
  UPDATE_SMURF,
  DELETE_SMURF,
  DELETE_SMURF_SUCCESS,
  UPDATE_SMURF_SUCCESS,
  FETCH_SMURFS_SUCCESS,
  ADD_SMURF_SUCCESS
} from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      return { ...state, fetchingSmurfs: true };
    case FETCH_SMURFS_SUCCESS:
      return { ...state, smurfs: action.payload, fetchingSmurfs: false };
    case ADD_SMURF:
      return { ...state, addingSmurfs: true };
    case ADD_SMURF_SUCCESS:
      return { ...state, smurfs: action.payload, addingSmurfs: false };
    case UPDATE_SMURF:
      return { ...state, updatingSmurfs: true };
    case UPDATE_SMURF_SUCCESS:
      return { ...state, smurfs: action.payload, updatingSmurfs: false };
    case DELETE_SMURF:
      return { ...state, deletingSmurfs: true };
    case DELETE_SMURF_SUCCESS:
      return { ...state, smurfs: action.payload, deletingSmurfs: false };

    default:
      return state;
  }
};
