import * as types from './TestVariable'

// 可分为两类： container方法 与 saga-effect方法 （saga-effect劫持会触发两次）
export default {
  // 同步
  TestModuleAction: (data) => ({
    type: types.TEST_MODULE_TEST,
    payload: data,
  }),

  // saga-effect 方法
  TestModuleSagaAction: (data) => ({
    type: types.TEST_MODULE_SAGA_TEST_ASYNC,
    payload: data,
  })
}
