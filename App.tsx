import { StatusBar } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import { Home } from './src/screens/Home'

export default function App() {
  return (
    <NativeBaseProvider>
      <Home />
      <StatusBar barStyle="default" />
    </NativeBaseProvider>
  )
}
