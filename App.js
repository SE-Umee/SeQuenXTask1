import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from './src/screens/signup-screen';
import HomeScreen from './src/screens/home-screen';
import {Colors} from './src/assets/constant/colors';
import store from './src/redux/store';
import {Provider} from 'react-redux';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(Colors.backgroundColor);
      StatusBar.setBarStyle('light-content');
    }
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="signUp" component={SignupScreen} />
          <Stack.Screen name="home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
