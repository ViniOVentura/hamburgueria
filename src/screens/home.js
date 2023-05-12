import React, { useState } from 'react';
import { Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/styles.js'
import logo from '../img/logo.avif'
import imgTeste from '../img/imgTeste.png'
import bacon from '../img/bacon.png'
import salada from '../img/salada.png'
import egg from '../img/egg.avif'
import tripleB from '../img/tripleB.avif'
import chicken from '../img/chicken.png'
import doubleB from '../img/duploB.avif'
import catupiry from '../img/catupiry.avif'
import simples from '../img/simples.avif'


export default function Home({list, setList}) {
    function addProduct(product, price, img){
        setList([...list, { product, price, img}])
    }
    return <ScrollView style={styles.background}>
        <Text style={styles.title}>Teste</Text>
        <Image source={logo} style={styles.frontImg} />


        <Text style={styles.titleSale}>👑 Campeão de vendas</Text>
        <View style={styles.viewSale}>
            <Image source={tripleB} style={styles.imgPromo}></Image>
            <View style={styles.alignPrice}>
                <Text style={styles.textSale}>Triple Burguer</Text>
                <Text style={styles.priceText}>R$ 36,00</Text>
            </View>
            <TouchableOpacity onPress={()=> addProduct('Triple Burguer','R$ 36,00', tripleB)} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>

        <Text style={styles.titleSale}>🔥 Promoções</Text>

        <View style={styles.viewSale}>
            <Image source={doubleB} style={styles.imgPromo}></Image>
            <View style={styles.alignPrice}>
                <Text style={styles.textSale}>X-Burguer Duplo</Text>
                <Text style={styles.priceText}>R$ 26,00</Text>
                <Text style={styles.priceTextSliced}>R$ 35,00</Text>
            </View>
            <TouchableOpacity onPress={()=> addProduct('X-Burguer Duplo', 'R$ 26,00', doubleB)} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.viewSale}>
            <Image source={chicken} style={styles.imgPromo}></Image>
            <View style={styles.alignPrice}>
                <Text style={styles.textSale}>Chicken burguer</Text>
                <Text style={styles.priceText}>R$ 26,00</Text>
                <Text style={styles.priceTextSliced}>R$ 35,00</Text>
            </View>
            <TouchableOpacity onPress={()=> addProduct('Chicken burguer', 'R$ 26,00', chicken)} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.viewSale}>
            <Image source={egg} style={styles.imgPromo}></Image>
            <View style={styles.alignPrice}>
                <Text style={styles.textSale}>X-egg</Text>
                <Text style={styles.priceText}>R$ 26,00</Text>
                <Text style={styles.priceTextSliced}>R$ 35,00</Text>
            </View>
            <TouchableOpacity onPress={()=> addProduct('X-egg', 'R$ 26,00', egg)} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>

        <Text style={styles.titleSale}>🍔 Tradicionais</Text>

        <View style={styles.viewSale}>
            <Image source={simples} style={styles.imgPromo}></Image>
            <View style={styles.alignPrice}>
                <Text style={styles.textSale}>Burguer simples</Text>
                <Text style={styles.priceText}>R$ 23,00</Text>
            </View>
            <TouchableOpacity onPress={()=> addProduct('Burguer simples', 'R$ 23,00', simples)} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.viewSale}>
            <Image source={salada} style={styles.imgPromo}></Image>
            <View style={styles.alignPrice}>
                <Text style={styles.textSale}>X-salada</Text>
                <Text style={styles.priceText}>R$ 23,00</Text>
            </View>
            <TouchableOpacity onPress={()=> addProduct('X-salada', 'R$ 23,00', salada)} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.viewSale}>
            <Image source={bacon} style={styles.imgPromo}></Image>
            <View style={styles.alignPrice}>
                <Text style={styles.textSale}>X-bacon</Text>
                <Text style={styles.priceText}>R$ 25,00</Text>
            </View>
            <TouchableOpacity onPress={()=> addProduct('X-bacon', 'R$ 25,00', bacon)} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.viewSale}>
            <Image source={catupiry} style={styles.imgPromo}></Image>
            <View style={styles.alignPrice}>
                <Text style={styles.textSale}>Catupiry</Text>
                <Text style={styles.priceText}>R$ 25,00</Text>
            </View>
            <TouchableOpacity onPress={()=> addProduct('Catupiry', 'R$ 25,00', catupiry)} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
        
    </ScrollView>
}