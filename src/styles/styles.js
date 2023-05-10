import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default StyleSheet.create({
    title:{
        fontSize: 42,
        fontWeight: '700',
        fontFamily: "Comic Sans MS",
        color: '#E0231D',
        margin: '10px',
        textAlign: 'center'
    },
    background: {
        backgroundColor:'#FBFFB9',
        width: '100%',
        height: '100%',
    },
    frontImg:{
        width: '200px',
        margin: '5px',
        resizeMode: 'contain',
        height: '200px',
        borderRadius: '50%',
        alignSelf: 'center'
    },
    titleSale:{
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
        borderRadius: '9999px'
    },
    textSale:{
        fontSize: 21,
        fontWeight: '500',
        fontFamily: "Comic Sans MS",
        alignSelf: 'center',
    },
    viewSale:{
        flexDirection: "row",
        paddingVertical: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    priceText:{
        fontSize: 14,
        fontWeight: '300',
        fontFamily: "Comic Sans MS",

    },
    alignPrice: {
        flexDirection: 'column',
        flex: 1,        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle:{
        height: '30px',
        width: '30px',
        backgroundColor: 'red',
        textAlign:'center',
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

    })