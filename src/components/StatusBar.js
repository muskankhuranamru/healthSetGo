import {StatusBar, useColorScheme} from 'react-native';
import React from 'react';

const StatusBarComponent = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />;
};

export default StatusBarComponent;
