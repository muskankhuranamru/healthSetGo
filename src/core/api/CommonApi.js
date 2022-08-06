import axios from 'axios';
import {applicationProperties} from '../application.properties';

const get = async (endPoint, data, loading) => {
  if (loading) {
    console.log('loading: ', loading);
    // CommonLoading.show();
  }

  try {
    let response = await axios.get(applicationProperties.baseUrl + endPoint);
    if (response.data !== undefined && response.data.status) {
      return {
        success: true,
        data: response,
      };
    } else {
      return {
        success: true,
        data: response,
      };
    }
  } catch (e) {
    return {
      success: false,
      data: e,
    };
  } finally {
    if (loading) {
      //   CommonLoading.hide();
    }
  }
};
const post = async (endPoint, data, loading) => {
  if (loading) {
    console.log('loading: ', loading);
    // CommonLoading.show();
  }

  try {
    let response = await axios.post(applicationProperties.baseUrl + endPoint);
    if (response.data !== undefined && response.data.status) {
      return {
        success: true,
        data: response,
      };
    } else {
      return {
        success: true,
        data: response,
      };
    }
  } catch (e) {
    return {
      success: false,
      data: e,
    };
  } finally {
    if (loading) {
      //   CommonLoading.hide();
    }
  }
};
export const commonApi = {
  get,
  post,
};
