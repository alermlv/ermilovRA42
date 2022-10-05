import { combineReducers, createStore } from 'redux';
import { formReducers } from './reducers/formReducers';
import { listReducers } from './reducers/listReducers';
import { filterReducers } from './reducers/filterReducers';

const reducer = combineReducers({
  formReducers,
  listReducers,
  filterReducers
})

const store = createStore(reducer);

export default store;
