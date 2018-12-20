import { all } from 'redux-saga/effects'
import { TestSaga } from './Test'


export default function* sagas() {
  yield all([
    ...TestSaga
  ]);
}
