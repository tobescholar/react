export function TestReducer(state = {}, {payload, type}) {
  switch (type) {
    case 'TEST_MODULE_TEST':
      return {
        ...state,
        text: 'test text',
      }
    default:
      return state;
  }
}
