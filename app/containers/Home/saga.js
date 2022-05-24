import { call, put, takeLatest } from 'redux-saga/effects';
import createAPI from 'api/createAPI';
import Actions from './actions';

// function* homeDefault() {
//   yield call();
// }

function* makeSaveParkingInputDataSaga({ data }) {
  const api = yield createAPI();
  const response = yield call(api.call, 'createPark', data);
  console.log('makeSaveParkingInputDataSaga called');

  yield put(Actions.Creators.setParkingInputDataAction(response.data));
}

export default function* homeSaga() {
  // yield takeLatest(Actions.Types.DEFAULT, homeDefault);
  yield takeLatest(
    Actions.Types.SAVE_PARKING_INPUT_DATA_SAGA,
    makeSaveParkingInputDataSaga,
  );
}
