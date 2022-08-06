import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, Card, Paragraph} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const ProductCard = ({item, showAddToCart, showShowMore, numberOfLines}) => {
  const navigation = useNavigation();

  const onPressAddToCart = () => {
    console.log('onPressAddToCart: ', onPressAddToCart);
  };

  const onPressShowMore = ({}) => {
    navigation.navigate('ProductDetailsScreen', {product: item});
  };

  return (
    <Card mode="elevated">
      <Card.Title title={item.title} subtitle={item.category} />
      <Card.Content>
        <Paragraph numberOfLines={numberOfLines || null}>
          {item.description}
        </Paragraph>
        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          <Text style={styles.priceText}>Price - </Text>
          <Text style={styles.priceText}>{item.price}</Text>
        </View>
      </Card.Content>
      <Card.Cover
        resizeMode="contain"
        style={{backgroundColor: 'white'}}
        source={{uri: item.image}}
      />
      <View style={{alignItems: 'flex-end'}}>
        <Card.Actions>
          {showAddToCart && (
            <Button onPress={onPressAddToCart}>Add to cart</Button>
          )}
          {showShowMore && (
            <Button
              onPress={() =>
                navigation.navigate('ProductDetailsScreen', {
                  productDetails: item,
                })
              }>
              Show more
            </Button>
          )}
        </Card.Actions>
      </View>
    </Card>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  priceText: {color: 'black', fontSize: 20},
});
