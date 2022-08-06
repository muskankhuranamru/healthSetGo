import React from 'react';
import {StyleSheet, View} from 'react-native';
import ProductCard from '../../../components/ProductCard';

export default function FlatListProductItem({item}) {
  return (
    <View style={{paddingHorizontal: 20, marginBottom: 10}}>
      <ProductCard item={item} numberOfLines={2} showAddToCart showShowMore />
    </View>
  );
}

const styles = StyleSheet.create({});
