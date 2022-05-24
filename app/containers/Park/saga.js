import { call, put, takeLatest } from 'redux-saga/effects';
import createAPI from 'api/createAPI';
import Actions from './actions';

function* parkDefault() {
  yield call();
}

function* makeGetPark() {
  const api = yield createAPI();
  const response = yield call(api.call, 'getPark');
  yield put(Actions.Creators.setPark(response.data));
}

export default function* parkSaga() {
  yield takeLatest(Actions.Types.DEFAULT, parkDefault);
  yield takeLatest(Actions.Types.GET_PARK, makeGetPark);
}
