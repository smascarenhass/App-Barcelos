// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Pages/Home';
import ButtonPromotion from './Components/Buttons/ButtonPromotin';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Barcelos" component={Home} />
      </Stack.Navigator>

      <ButtonPromotion/>
    </NavigationContainer>
  );
}

export default App;