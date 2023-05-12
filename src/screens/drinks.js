import React, { useState } from 'react';
import { Text, Image, View, TouchableOpacity, ScrollView, SafeAreaView, FlatList } from 'react-native';
import styles from '../styles/styles'
import coca from '../img/coca.png'
import fanta from '../img/fanta.png'
import guarana from '../img/guarana.png'
import redbull from '../img/redbull.png'
import monster from '../img/monster.png'


export default function Drinks({list, setList}) {
    function addProduct(product, price, img){
        setList([...list, { product, price, img}])
    }
    return <SafeAreaView style={styles.background}>
        

        <Text style={styles.titleSale}>Refrigerantes</Text>
        <View style={styles.viewSale}>
            <Image source={coca} style={styles.imgPromo}></Image>
            <View style={styles.alignPrice}>
                <Text style={styles.textSale}>Coca-cola lata</Text>
                <Text style={styles.priceText}>R$ 6,00</Text>
            </View>
            <TouchableOpacity onPress={()=> addProduct('Coca-cola lata','R$ 6,00' , coca)} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.viewSale}>
            <Image source={fanta} style={styles.imgPromo}></Image>
            <View style={styles.alignPrice}>
                <Text style={styles.textSale}>Fanta lata</Text>
                <Text style={styles.priceText}>R$ 6,00</Text>
            </View>
            <TouchableOpacity onPress={()=> addProduct('Fanta lata','R$ 6,00', fanta)} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.viewSale}>
            <Image source={guarana} style={styles.imgPromo}></Image>
            <View style={styles.alignPrice}>
                <Text style={styles.textSale}>Guarana lata</Text>
                <Text style={styles.priceText}>R$ 6,00</Text>
            </View>
            <TouchableOpacity onPress={()=> addProduct('Guarana lata', 'R$ 6,00', guarana)} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
        
        <Text style={styles.titleSale}>Energéticos</Text>
        <View style={styles.viewSale}>
            <Image source={redbull} style={styles.imgPromo}></Image>
            <View style={styles.alignPrice}>
                <Text style={styles.textSale}>Red bull</Text>
                <Text style={styles.priceText}>R$ 9,00</Text>
            </View>
            <TouchableOpacity onPress={()=> addProduct('Red bull', 'R$ 9,00', redbull)} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.viewSale}>
            <Image source={monster} style={styles.imgPromo}></Image>
            <View style={styles.alignPrice}>
                <Text style={styles.textSale}>Monster</Text>
                <Text style={styles.priceText}>R$ 12,00</Text>
            </View>
            <TouchableOpacity onPress={()=> addProduct('Monster', 'R$ 12,00', monster)} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>


    </SafeAreaView>

}