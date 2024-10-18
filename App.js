import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MyStack from './MyStack'
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
const alumnoImage = require('./assets/alumno_image1.png');
const logoImage = require('./assets/logoApp.png');

const App = () => {

  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
};


export default App;