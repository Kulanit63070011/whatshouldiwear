import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './frontend/screens/HomeScreen';
import Option1Screen from './frontend/screens/Option1Screen';
import Option2Screen from './frontend/screens/Option2Screen';
import AllOptionsScreen from './frontend/screens/AllOptionsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2196F3', // change to desired color
          },
          headerTintColor: '#fff', // set text color to white
        }}>
        <Stack.Screen name="What should i wear?" component={HomeScreen} />
        <Stack.Screen name="selected1" component={Option1Screen} />
        <Stack.Screen name="Option2" component={Option2Screen} />
        <Stack.Screen name="AllOptions" component={AllOptionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
