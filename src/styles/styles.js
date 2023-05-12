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
        // resizeMode: 'contain',
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
        //paddingVertical: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        //border: '2px solid #B00000',
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
        fontWeight: '700',
        fontSize: 22
    },
    itemDescription: {
        fontSize: 12,
        fontFamily: "Comic Sans MS",
        color: '#C4C4C4'
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
    forgotButton: {
        height: 30,
        marginBottom: 30,
    },
    loginButton: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
    },
    warnLogin:{
        fontSize: 32,
        fontWeight: '700',
        fontFamily: "Comic Sans MS",
        color: '#B00000',
        margin: '10px',
        textAlign: 'center'
        
    },
    

})