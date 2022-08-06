import {FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import CommonHeader from '../../components/CommonHeader';
import ScreenWrapper from '../../components/ScreenWrapper';
import FlatListProductItem from './components/FlatListProductItem';
import {useNavigation} from '@react-navigation/native';
import LoaderWrapper from '../../components/LoaderWrapper';
import {useDispatch} from 'react-redux';
import {ProductsAction} from '../../redux/actions/ProductsActions';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [isLoading, setisLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setisLoading(true);
    dispatch(ProductsAction.getProducts('products')).then(res => {
      setProducts(res.data.data);
      setisLoading(false);
    });
  }, []);

  const renderItem = ({item}) => <FlatListProductItem item={item} />;

  const onPressCart = () => {
    navigation.navigate('CartScreen');
  };

  return (
    <ScreenWrapper>
      <CommonHeader
        title={'Welcome'}
        subtitle={'Browse products'}
        showCartIcon
        onPressCart={onPressCart}
      />
      <LoaderWrapper isLoading={isLoading}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </LoaderWrapper>
    </ScreenWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  contentContainerStyle: {
    marginVertical: 10,
  },
});
