import {ProductsConstants} from '../constants/ProductsConstants';

const initialState = {
  status: '',
  data: {
    products: {},
  },
  error: {},
};

export function ProductsReducer(state = initialState, action) {
  switch (action.type) {
    case ProductsConstants.PRODUCTS_REQUEST:
      return {
        status: ProductsConstants.PRODUCTS_REQUEST,
        data: {...state.data},
        error: {},
      };
    case ProductsConstants.PRODUCTS_SUCCESS:
      return {
        status: ProductsConstants.PRODUCTS_SUCCESS,
        data: {...state.data, ...{products: action.data}},
        error: {},
      };
    case ProductsConstants.PRODUCTS_FAILURE:
      return {
        status: ProductsConstants.PRODUCTS_FAILURE,
        data: {...state.data, products: {}},
        error: action.data,
      };

    default:
      return state;
  }
}
