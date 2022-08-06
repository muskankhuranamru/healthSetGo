import {StyleSheet} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import CommonHeader from '../../components/CommonHeader';
import {useNavigation} from '@react-navigation/native';
import ProductCard from '../../components/ProductCard';

const ProductDetailsScreen = productDetails => {
  const item = productDetails.route.params.productDetails;
  const navigation = useNavigation();

  const onPressCart = () => {
    navigation.navigate('CartScreen');
  };

  return (
    <ScreenWrapper>
      <CommonHeader
        title={'Product Details'}
        showCartIcon
        onPressCart={onPressCart}
        showBackIcon
        onPressBack={() => navigation.goBack()}
      />
      <ProductCard item={item} showAddToCart />
    </ScreenWrapper>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({});
