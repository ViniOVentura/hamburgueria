import React, { useState } from 'react';
import { Text, Image, View, TouchableOpacity, ScrollView, SafeAreaView, FlatList } from 'react-native';
import styles from '../styles/styles'
import imgTeste from '../img/imgTeste.png'

export default function Cart({list, setList}) {
    console.log(list)
    return <SafeAreaView style={{flex: 1}}>
        <FlatList
            data={list}
            renderItem={(produto) => {
                console.log(produto);
                return <View style={styles.viewSale}>
                <Image source={imgTeste} style={styles.imgPromo}></Image>
                <View style={styles.alignPrice}>
                    <Text style={styles.textSale}>{produto.item.product}</Text>
                    <Text style={styles.priceText}>{produto.item.price}</Text>
                </View>
            </View>}}

        />
    </SafeAreaView>
}