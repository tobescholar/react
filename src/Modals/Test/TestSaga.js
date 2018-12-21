import { delay, eventChannel } from 'redux-saga';
import { call, fork, put, take, takeEvery } from 'redux-saga/effects';

function *TestSagaTest() {
  yield delay(1000);
  console.log('TestSaga');
  yield put({ type: 'TEST_MODULE_TEST' })
}

export function* TestSagas() {
  takeEvery('TEST_MODULE_TEST', TestSagaTest)
}

export const TestSaga = [
  fork(TestSagas)
];
