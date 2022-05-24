/*
 *
 * Home reducer
 *
 */
import { fromJS } from 'immutable';
import { createReducer } from 'reduxsauce';
import moment from 'moment';
import Actions from './actions';

export const INITIAL_STATE = fromJS({
  id: '',
  name: '',
  entryPoint: '',
  vehicleType: '',
  parkingType: '',
  dateOfEntryCombined: '',
  dateOfExitCombined: '',
});

// export const defaultReducer = state =>
//   state.merge({
//     status: false,
//   });

// export const doSetHome = (state, { data }) =>
//   state.merge({
//     data,
//   });

export const doSetParkingInputData = (state, { data }) =>
  state.merge({
    id: data.id,
    name: data.name,
    entryPoint: data.entryPoint,
    vehicleType: data.vehicleType,
    parkingType: data.parkingType,
    dateOfEntryCombined: data.dateOfEntryCombined,
    dateOfExitCombined: data.dateOfExitCombined,
  });

const { Types } = Actions;

export const reducer = createReducer(INITIAL_STATE, {
  // [Types.DEFAULT]: defaultReducer,
  // [Types.SET_HOME]: doSetHome,
  [Types.SET_PARKING_INPUT_DATA_ACTION]: doSetParkingInputData,
});

export default reducer;
