import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home'
import Cart from '../screens/cart'
import Drinks from '../screens/drinks'
import Login from '../screens/login';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from '../routes/BottomTab.js'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Routes() {
    const [list, setList] = useState([])
    return<NavigationContainer>

    <Stack.Navigator>
        <Stack.Screen  options={{headerShown:false}} name='BottomTab' component={BottomTab}/>
        <Stack.Screen name='Login' component={Login}/>
    </Stack.Navigator>

</NavigationContainer>

}