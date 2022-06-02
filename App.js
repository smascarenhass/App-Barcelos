// In App.js in a new project

import * as React from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Pages/Home';
import Promotion from './Pages/Promotion';
import User from './Pages/User';

const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Barcelos" component={Home} />
        <Stack.Screen name="Promoção" component={Promotion} />
        <Stack.Screen name="Perfil" component={User} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;