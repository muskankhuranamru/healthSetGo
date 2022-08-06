import {AuthService} from '../services/AuthService';
import {AuthConstants} from '../constants/AuthConstants';
import { RequestConstant, ResponseConstant } from '../../core/api/CommonConstant';
export const AuthActions = {
  signIn,
  signOut,
};

function signIn(data) {
  return async dispatch => {
    dispatch(RequestConstant(AuthConstants.SIGNIN_REQUEST, data));
    const result = await AuthService.signIn(data);
    dispatch(
      ResponseConstant(
        AuthConstants.SIGNIN_REQUEST,
        AuthConstants.SIGNIN_SUCCESS,
        result,
      ),
    );
    return result;
  };
}

function signOut() {
  return async dispatch => {
    dispatch(RequestConstant(AuthConstants.SIGNOUT_REQUEST, {}));
    const result = {
      success: true,
      data: {},
    };
    dispatch(
      ResponseConstant(
        AuthConstants.SIGNOUT_SUCCESS,
        AuthConstants.SIGNOUT_FAILURE,
        result,
      ),
    );
  };
}
