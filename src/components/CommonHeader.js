import React from 'react';
import {Appbar} from 'react-native-paper';

const CommonHeader = ({
  title,
  subtitle,
  showCartIcon,
  onPressCart,
  showBackIcon,
  onPressBack,
}) => {
  return (
    <Appbar.Header>
      {showBackIcon && <Appbar.BackAction onPress={onPressBack} />}
      <Appbar.Content title={title} subtitle={subtitle} />
      {showCartIcon && <Appbar.Action icon="cart" onPress={onPressCart} />}
    </Appbar.Header>
  );
};

export default CommonHeader;
