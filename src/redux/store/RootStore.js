/* eslint-disable prettier/prettier */
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {ProductsReducer} from '../reducers/ProductsReducer';

const allReducers = combineReducers({
  ProductsReducer,
});
const applicationStore = createStore(
  allReducers,
  applyMiddleware(thunkMiddleware),
);
export default applicationStore;
