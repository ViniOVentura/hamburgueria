import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home'
import Cart from '../screens/cart'
import Drinks from '../screens/drinks'
import Login from '../screens/login';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function BottomTab(){
    const [list, setList] = useState([])
    return<>

        <Tab.Navigator>
            <Tab.Screen name='Lanches' children={() => <Home list={list} setList={setList}/>}/>
            <Tab.Screen name='Bebidas' children={() => <Drinks list={list} setList={setList}/>}/>
            <Tab.Screen name='Carrinho' children={() => <Cart list={list} setList={setList}/>}/>
        </Tab.Navigator>

    </>

}