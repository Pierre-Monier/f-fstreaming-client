import { createStore } from 'redux';
import * as types from './actions/actionsType';

export const defaultState = {
    search: ''
}

export const filter = (state = defaultState, action) => {
    switch (action.type) {
        case types.CHANGESEARCH:
            return state = {search: action.data}
        default:
            break;
    }
}

export const filterStore = createStore(filter);