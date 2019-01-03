import { combineReducers } from 'redux';
import { TestReducer } from './Test'

export default combineReducers({
  test_module: TestReducer
})
