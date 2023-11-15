import {combineReducers, legacy_createStore as createStore} from 'redux';
import customAlert from '../modules/customAlert';
import letters from '../modules/letters';
import modal from '../modules/modal';

const rootReducer = combineReducers({letters, modal, customAlert});

const store = createStore(rootReducer);

export default store;
