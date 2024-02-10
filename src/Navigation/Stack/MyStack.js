import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import AuthenticationScreen from '../../screens/Authentication';
import HomeScreen from '../../screens/Home';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Auth" component={AuthenticationScreen} />
      <Stack.Screen name= "Home" component={HomeScreen}/>
    </Stack.Navigator>
  );
}
