import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home'
import Cart from '../screens/cart'


const Tab = createBottomTabNavigator();

export default function Routes(){
    const [list, setList] = useState([])
    return<NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Lanches' children={() => <Home list={list} setList={setList}/>}/>
            <Tab.Screen name='Bebidas' children={() => <Home list={list} setList={setList}/>}/>
            <Tab.Screen name='Porções' children={() => <Home list={list} setList={setList}/>}/>
            <Tab.Screen name='Carrinho' children={() => <Cart list={list} setList={setList}/>}/>

        </Tab.Navigator>


    </NavigationContainer>

}