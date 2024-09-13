/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import ContactsScreen from './src/Screens/ContactsScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ContactsScreen />
    </SafeAreaView>
  );
};

export default App;
