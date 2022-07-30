import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import reducer from "./reducer";
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware() 
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore)
const store = createStoreWithMiddleware(reducer)

sagaMiddleware.run(rootSaga)

export default store
