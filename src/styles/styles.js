import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default StyleSheet.create({
    title: {
        fontSize: 42,
        fontWeight: '700',
        fontFamily: "Comic Sans MS",
        color: '#B00000',
        margin: '10px',
        textAlign: 'center'
    },
    background: {
        backgroundColor: '#FCFFCA',
        width: '100%',
        height: '100%',
    },
    frontImg: {
        width: '200px',
        margin: '5px',
        resizeMode: 'contain',
        height: '200px',
        borderRadius: '50%',
        alignSelf: 'center'
    },
    titleSale: {
        fontSize: 24,
        fontWeight: '600',
        fontFamily: "Comic Sans MS",
        textAlign: 'left',
        marginTop: '10px',
        marginLeft: '15px'
    },
    imgPromo: {
        width: '75px',
        height: '75px',
        marginLeft: '15px',
        borderRadius: '20px'
    },
    textSale: {
        fontSize: 21,
        fontWeight: '500',
        fontFamily: "Comic Sans MS",
        alignSelf: 'center',
        marginLeft: '2px',
        textAlign: 'left',
        flex: 1
    },
    viewSale: {
        flexDirection: "row",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        padding: '5px',
        margin: '3px',
        boxShadow: '#B00000 0px 5px 15px'
    },
    priceText: {
        color: '#FF5C5C',
        fontSize: 14,
        fontWeight: '300',
        fontFamily: "Comic Sans MS",
    },
    priceTextSliced: {
        color: '#BBBBB9',
        fontSize: 10,
        fontWeight: '300',
        fontFamily: "Comic Sans MS",
        textDecorationLine: 'line-through'

    },
    alignPrice: {
        flexDirection: 'column',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        height: '30px',
        width: '30px',
        backgroundColor: '#B00000',
        textAlign: 'center',
        borderRadius: '9999px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 22
    },
    buyButton: {
        margin: 16,
        marginTop: 16,
        backgroundColor: '#B22222',
        paddingVertical: 16,
        borderRadius: 6,
    },
    textButton: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold'
    },
    loginBackground: {
        width:'100%',
        height:'100%',
        backgroundColor: "#FCFFCA",
        alignItems: "center",
        justifyContent: "center",
    },
    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
    },
    textInput: {
        fontWeight: '400',
        textAlign: 'left',
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    warnLogin:{
        fontSize: 32,
        fontWeight: '700',
        fontFamily: "Comic Sans MS",
        color: '#B00000',
        margin: '10px',
        textAlign: 'center'
        
    },
    textLoginButton: {
        fontFamily: "Comic Sans MS",
        fontSize: 21,
        fontWeight: '500',
    },
    tabBarLabelStyle:{
        width:'100%',
        flex:1,
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 21,
        paddingTop: 21,
        backgroundColor: '#FFAAAA',
        fontFamily: 'Fantasy'
    },
    loginButton:{
        height: '60px',
        width: '100px',
        backgroundColor: '#B00000',
        textAlign: 'center',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    }
    

    

})