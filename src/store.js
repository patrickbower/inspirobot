import { createStore } from 'redux';
import rootReducer from './reducers';

const defaultState = {
    dialog: {}
};

const store = createStore(rootReducer, defaultState);

export default store;
