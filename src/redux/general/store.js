import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import * as types from './actions/actionTypes';
const persistConfig = {
  key: 'root',
  storage,
}

export const defaultState = {
  general: null,
  src: null,
  lasts: null,
  user: {
    isChecked: false,
    username: null
  }
 }

export const detail = (state = defaultState, action) => {
  switch (action.type) {
    case types.ADDSINGLE:
      return state = {general: action.data, src: state.src, lasts: state.lasts, user: state.user}
    case types.ADDSRC:
      return state = {general: state.general, src: action.data, lasts: state.lasts, user: state.user}
    case types.ADDLAST:
      return state = {general: state.general, src: state.src, lasts: action.data, user: state.user}
    case types.CLEAR:
      return state = {general: null, src: null, lasts: null, user: state.user}
    case types.CHECKUSER:
       return state = {general: state.general, src: state.src, lasts: state.lasts, user: action.data}
    default:
      return state
  }
}

const persistedReducer = persistReducer(persistConfig, detail)

export let store = createStore(persistedReducer)
export let persistor = persistStore(store)
