// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Pages/Home';
import Promotion from './Pages/Promotion';
import User from './Pages/User';
import Corredores from './Pages/Corredores';
import Cadastro from './Pages/Cadastro';
import Login from './Pages/Login';

const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen name="Barcelos" component={Home} />
        <Stack.Screen name="Promoções" component={Promotion} />
        <Stack.Screen name="Perfil" component={User} />
        <Stack.Screen name="Corredores" component={Corredores} />
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Login" component={Login} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;