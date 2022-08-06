/* eslint-disable prettier/prettier */
import axios from 'axios';
import { applicationProperties } from '../../core/application.properties';

export const AuthService = {
  signIn,
  signOut,
};

async function signIn(data) {
  try {
    let loginResponse = await axios.post(applicationProperties.loginUrl, data);
    return loginResponse;
  } catch (e) {
    return {
      success: false,
      data: e,
    };
  }
}

async function signOut() {
  return await applicationProperties.baseUrl('/signout', {});
}
