import {commonApi} from '../../core/api/CommonApi';

export const ProductsService = {
  getProducts,
};

async function getProducts(url, data) {
  return await commonApi.get(url, data);
}
