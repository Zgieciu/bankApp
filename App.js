import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import Home from './screens/home';

export default function App() {
  return (
    <View>
      <Header />
      <Home />
    </View>
  );
}