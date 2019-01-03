import * as types from './TestVariable'

export function TestReducer(state = {}, { payload = {}, type }) {
  switch (type) {
    // 更新
    case types.TEST_MODULE_PUT:
      return {
        ...state,
        ...payload,
      }
    // 测试
    case types.TEST_MODULE_TEST:
      return {
        ...state,
        text: payload,
      }
    default:
      return state;
  }
}
