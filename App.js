import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NetworkProvider } from './src/NetworkContext';
import HomePage from './src/Home';
import SettingPage from './src/Setting';

const Stack = createNativeStackNavigator()


const App = () => {

  return (
    <NetworkProvider>
      <NavigationContainer
      
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name='Home' component={HomePage} />
          <Stack.Screen name='Settings' component={SettingPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </NetworkProvider>
  )

};


export default App;
