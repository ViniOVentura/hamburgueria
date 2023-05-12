import { View, SafeAreaView, StatusBar } from 'react-native';
import Routes from './src/routes/routes.js'
import Login from './src/screens/login'



export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Routes />
    </SafeAreaView>
  )

    ;
}