import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import StatusBarComponent from '../../components/StatusBar';
import CommonHeader from '../../components/CommonHeader';
import {useNavigation} from '@react-navigation/native';
import {commonApi} from '../../core/api/CommonApi';

const CartScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    commonApi
      .get(
        'carts/user/11',
        // {
        //   userId: 5,
        //   date: new Date(),
        //   products: [
        //     {productId: 5, quantity: 1},
        //     {productId: 1, quantity: 5},
        //   ],
        // }
      )
      .then(res => console.log('res :', res));
  }, []);

  return (
    <ScreenWrapper>
      <StatusBarComponent />
      <CommonHeader
        title={'Cart'}
        subtitle={''}
        showBackIcon
        onPressBack={() => navigation.goBack()}
      />
    </ScreenWrapper>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
