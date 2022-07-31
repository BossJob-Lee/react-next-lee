import { takeEvery, put } from 'redux-saga/effects'

// import { put, takeEvery } from 'redux-saga/effects'

// ...
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
function* incrementAsync() {
  yield call(delay, 1000);
      const data = {
    }
  
    // 不允许在type INCREASE 中触发 INCREASE， 必须不一样不然会一直循环
  yield put({ type: 'DECREASE', response: data })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export default function* msg() {
  yield takeEvery('INCREASE', incrementAsync)
}