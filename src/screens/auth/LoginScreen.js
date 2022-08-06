import React, {useContext, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Button, ActivityIndicator} from 'react-native-paper';
import StatusBarComponent from '../../components/StatusBar';
import CommonHeader from '../../components/CommonHeader';
import CommonTextInput from '../../components/CommonTextInput';
import ScreenWrapper from '../../components/ScreenWrapper';
import {AuthActions} from '../../redux/actions/AuthActions';
import {useDispatch} from 'react-redux';
import {AuthContext} from '../../navigation/ApplicationNavigator';
import {setAuthToken} from '../../utilities/setAuthToken';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const {signIn} = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState('mor_2314');
  const [password, setPassword] = useState('83r5^_');

  const onPressLogin = async () => {
    setIsLoading(true);
    const signInData = {
      username: email,
      password: password,
    };
    dispatch(AuthActions.signIn(signInData)).then(res => {
      if (res && res.status == 200) {
        signIn(res.data.token);
        let token = res.data.token;
        setAuthToken(token);
        setIsLoading(false);
      } else {
        Alert.alert('Oops', 'Something  went wrong.');
        setIsLoading(false);
      }
    });
  };

  return (
    <ScreenWrapper>
      <StatusBarComponent />
      <CommonHeader title={'Hey,'} subtitle={'Login now.'} />
      <View style={styles.body}>
        <CommonTextInput
          label="Email"
          value={email}
          onChangeText={email => setEmail(email)}
        />
        <CommonTextInput
          label="Password"
          value={password}
          onChangeText={password => setPassword(password)}
        />
        <View style={styles.buttonContainer}>
          {isLoading === false ? (
            <>
              <Button icon="login" mode="contained" onPress={onPressLogin}>
                LOGIN
              </Button>
            </>
          ) : (
            <>
              <ActivityIndicator />
            </>
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  body: {
    flex: 1,
    padding: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default LoginScreen;
