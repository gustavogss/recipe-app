import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Home } from '../pages/Home';
import { Favorites } from '../pages/Favorites';

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Favorites' component={Favorites}/>
    </Tab.Navigator>
  )
}