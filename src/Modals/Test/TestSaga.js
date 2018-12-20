import { eventChannel } from 'redux-saga';
import { call, fork, put, take } from 'redux-saga/effects';

export function* TestSagaTest() {
  console.log('TestSaga');
}


export const TestSaga = [
  fork(TestSagaTest)
];
