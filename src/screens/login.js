import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, onChangeText} from "react-native";
import styles from '../styles/styles'
import logo from '../img/logo.avif'

export default function Login() {
return<View style={styles.loginBackground}>
    <Text style={styles.warnLogin}>Você precisa realizar o login para finalizar a compra!</Text>
      <Image source={logo} style={styles.frontImg} /> 
      <View style={styles.inputView}>
        <TextInput 
        style={styles.textInput} 
        placeholder="Email" 
        placeholderTextColor={'#'}
        secureTextEntry={true}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput 
        style={styles.textInput} 
        placeholder="Senha" 
        placeholderTextColor={'#'}
        secureTextEntry={true}
        /> 
      </View> 
      <View>
    <TouchableOpacity onPress={() => {alert('Cu')}}>
        <Text>
            Login
        </Text>
    </TouchableOpacity>

      </View>

    </View> 
}