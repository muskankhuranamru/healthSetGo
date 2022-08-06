import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

const LoaderWrapper = ({isLoading, ...props}) => {
  return (
    <View style={{flex: 1}}>
      {isLoading ? (
        <View style={styles.conatiner}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        props?.children
      )}
      {/* {props?.children} */}
    </View>
  );
};

export default LoaderWrapper;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
