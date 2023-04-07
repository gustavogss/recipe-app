import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Search } from '../pages/Search';

const Stack = createNativeStackNavigator();

export function StackRoutes() {
    
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='Detail' component={Details} options={{title: "Detalhes da Receita"}} />
        <Stack.Screen name='Search' component={Search} options={{title: "Veja o encontramos"}}/>      
    </Stack.Navigator>
  )
}