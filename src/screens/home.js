import React, { useState } from 'react';
import { Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/styles.js'
import logo from '../img/logo.avif'
import imgTeste from '../img/imgTeste.png'


export default function Home({list, setList}) {
    function addProduct(product, price){
        setList([...list, { product, price}])
    }
    return <ScrollView style={styles.background}>
        <Text style={styles.title}>Teste</Text>
        <Image source={logo} style={styles.frontImg} />

        <Text style={styles.titleSale}>Lançamentos</Text>

        <View style={styles.viewSale}>
            <Image source={imgTeste} style={styles.imgPromo}></Image>
            <View style={styles.alignPrice}>
                <Text style={styles.textSale}>X tudo</Text>
                <Text style={styles.priceText}>R$ 34,00</Text>
            </View>
            <TouchableOpacity onPress={()=> addProduct('Xtudo', 34)} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.viewSale}>
            <Image source={imgTeste} style={styles.imgPromo}></Image>
            <View style={styles.alignPrice}>
                <Text style={styles.textSale}>X salada</Text>
                <Text style={styles.priceText}>R$ 29,00</Text>
            </View>
            <TouchableOpacity onPress={()=> addProduct('X salada', 29)} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.viewSale}>
            <Image source={imgTeste} style={styles.imgPromo}></Image>
            <View style={styles.alignPrice}>
                <Text style={styles.textSale}>X bacon</Text>
                <Text style={styles.priceText}>R$ 25,00</Text>
            </View>
            <TouchableOpacity onPress={()=> addProduct('X bacon', 25)} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.viewSale}>
            <Image source={imgTeste} style={styles.imgPromo}></Image>
            <View style={styles.alignPrice}>
                <Text style={styles.textSale}>X tudo</Text>
                <Text style={styles.priceText}>R$ 34,00</Text>
            </View>
            <TouchableOpacity onPress={()=> addProduct('Xtudo', 34)} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.viewSale}>
            <Image source={imgTeste} style={styles.imgPromo}></Image>
            <View style={styles.alignPrice}>
                <Text style={styles.textSale}>X tudo</Text>
                <Text style={styles.priceText}>R$ 34,00</Text>
            </View>
            <TouchableOpacity onPress={()=> addProduct('Xtudo', 34)} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>

        
    </ScrollView>
}