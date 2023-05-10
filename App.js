import {View, SafeAreaView, StatusBar } from 'react-native';
import Routes from './src/routes/routes'



export default function App() {
  return (
  <SafeAreaView style={{flex:1}}>
    <StatusBar/>
    <Routes/>
    </SafeAreaView>
  )

  ;
}