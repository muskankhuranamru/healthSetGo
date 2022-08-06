import {RequestConstant, ResponseConstant} from '../../core/api/CommonConstant';
import {ProductsConstants} from '../constants/ProductsConstants';
import {ProductsService} from '../services/ProductsService';

export const ProductsAction = {
  getProducts,
};

function getProducts(url, data) {
  return async dispatch => {
    dispatch(RequestConstant(ProductsConstants.PRODUCTS_REQUEST, data));
    const result = await ProductsService.getProducts(url, data);
    dispatch(
      ResponseConstant(
        ProductsConstants.PRODUCTS_SUCCESS,
        ProductsConstants.PRODUCTS_FAILURE,
        result,
      ),
    );
    return result;
  };
}
