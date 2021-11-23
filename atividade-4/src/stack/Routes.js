import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Cadastro from '../screens/Cadastro';
import IMC from '../screens/IMC';
import Sobre from '../screens/Sobre';

const Stack = createStackNavigator();

export default Routes => {
     return (
          <NavigationContainer>
               <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Cadastro" component={Cadastro} />
                    <Stack.Screen name="IMC" component={IMC} />
                    <Stack.Screen name="Sobre" component={Sobre} />
               </Stack.Navigator>
          </NavigationContainer>

     );
}