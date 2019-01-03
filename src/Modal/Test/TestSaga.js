import { delay, eventChannel } from 'redux-saga';
import { call, fork, put, take, takeEvery } from 'redux-saga/effects';
// http请求
import Request from '@/Untils/Request'
// 变量
import * as types from './TestVariable'

// effects (测试异步)
function *testAsyncTest(payload) {
  const res = yield Request('http://localhost:3441/api/getTest');
  yield put({ type: types.TEST_MODULE_PUT, payload: res })
}

function *testFn(data = {}) {
  console.log(data)
  // yield put(data)
}

// 监听
function* TestSagas() {
  yield takeEvery(types.TEST_MODULE_SAGA_TEST_ASYNC, testAsyncTest);
  yield takeEvery(types.TEST_MODULE_TEST, testFn);
}

export const TestSaga = [
  fork(TestSagas)
];
