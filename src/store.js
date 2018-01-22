import { createStore } from 'redux';
import rootReducer from './reducers';

const defaultState = {
    counter: 0
};

const store = createStore(rootReducer, defaultState);

export default store;
