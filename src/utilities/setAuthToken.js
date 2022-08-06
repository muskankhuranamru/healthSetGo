import MyAsyncStorage from '../persistence/storage/MyAsyncStorage';

export const setAuthToken = async token => {
  await MyAsyncStorage.storeData('authToken', {
    token: token,
  });
};
