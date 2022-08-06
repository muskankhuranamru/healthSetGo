import React, {useEffect, useMemo, useReducer, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStackNavigator from './AuthStackNavigator';
import HomeStackNavigator from './HomeStackNavigator';

const Stack = createStackNavigator();
export const AuthContext = React.createContext();

export default function ApplicationNavigator() {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
        case 'SIGN_UP':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );
  console.log(
    '🚀 ~ file: ApplicationNavigator.js ~ line 46 ~ ApplicationNavigator ~ state',
    state,
  );

  const [authToken, setNewAuthToken] = useState();

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        setNewAuthToken(userToken.password);
      } catch (e) {
        // Restoring token failed
      }
      userToken === false
        ? dispatch({type: 'RESTORE_TOKEN', token: null})
        : dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };
    bootstrapAsync();
  }, [authToken]);

  const authContext = useMemo(
    () => ({
      signIn: async data => {
        dispatch({type: 'SIGN_IN', token: data});
      },
      signOut: async () => {
        setNewAuthToken('null');
        dispatch({type: 'SIGN_OUT'});
      },
      authToken: async () => {
        setNewAuthToken(authToken);
      },
      authToken,
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          keyboardHidesTabBar: true,
          gestureEnabled: false,
        }}>
        {state.userToken == null ? (
          <>
            <Stack.Screen
              options={{gestureEnabled: false}}
              name="AuthNavigator"
              component={AuthStackNavigator}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              options={{gestureEnabled: false}}
              name="HomeStackNavigator"
              component={HomeStackNavigator}
            />
          </>
        )}
      </Stack.Navigator>
    </AuthContext.Provider>
  );
}
