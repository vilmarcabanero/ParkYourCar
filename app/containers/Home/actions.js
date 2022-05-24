/*
 *
 * Home actions
 *
 */

import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  // default: null,
  // getHome: null,
  // setHome: ['data'],
  setParkingInputDataAction: ['data'],
  saveParkingInputDataSaga: ['data'],
  // getParkingInputData: null,
});

const Actions = {
  Types,
  Creators,
};

export default Actions;
