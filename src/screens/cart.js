import React, { useState } from 'react';
import { Text, Image, View, TouchableOpacity, ScrollView, SafeAreaView, FlatList } from 'react-native';
import styles from '../styles/styles'
import imgTeste from '../img/imgTeste.png'
import coca from '../img/coca.png'
import fanta from '../img/fanta.png'
import guarana from '../img/guarana.png'
import redbull from '../img/redbull.png'
import monster from '../img/monster.png'
import bacon from '../img/bacon.png'
import salada from '../img/salada.png'
import egg from '../img/egg.avif'
import tripleB from '../img/tripleB.avif'
import chicken from '../img/chicken.png'
import doubleB from '../img/duploB.avif'
import catupiry from '../img/catupiry.avif'
import simples from '../img/simples.avif'
import { useNavigation } from '@react-navigation/native';


export default function Cart({list, setList}) {
    const navigation = useNavigation()
    console.log(list)
    return <SafeAreaView style={styles.background}>
        <FlatList
            data={list}
            renderItem={(produto) => {
                console.log(produto);
                return <View style={styles.viewSale}>
                <Image source={produto.item.img} style={styles.imgPromo}></Image>
                <View style={styles.alignPrice}>
                    <Text style={styles.textSale}>{produto.item.product}</Text>
                    <Text style={styles.priceText}>{produto.item.price}</Text>
                </View>
            </View>}}
        />
        <TouchableOpacity style={styles.buyButton}>
<Text style={styles.textButton} onPress={() => {navigation.navigate('Login')}}>
            Finalizar Compra
</Text>
            </TouchableOpacity>
    </SafeAreaView>
}