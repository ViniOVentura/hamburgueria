import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home'
import Cart from '../screens/cart'
import Drinks from '../screens/drinks'
import Login from '../screens/login';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../styles/styles'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function BottomTab(){
    const [list, setList] = useState([])
    return<>

        <Tab.Navigator         
        screenOptions={{tabBarActiveTintColor:'#FF8C00',
                        tabBarInactiveTintColor:'white',
                        tabBarLabelStyle:{
                            width:'100%',
                            flex:1,
                            fontWeight:'bold',
                            fontSize:16,
                            lineHeight:21,
                            paddingTop:21,
                            backgroundColor:'#8B0000'},
                        tabBarStyle:{
                            width:'100%',
                            height:60,
                            lineHeight:21},
                        tabBarIconStyle:{
                            display:'none',
                        }}}>
            <Tab.Screen name='Lanches' children={() => <Home list={list} setList={setList}/>}/>
            <Tab.Screen name='Bebidas' children={() => <Drinks list={list} setList={setList}/>}/>
            <Tab.Screen name='Carrinho' children={() => <Cart list={list} setList={setList}/>}/>
        </Tab.Navigator>

    </>

}