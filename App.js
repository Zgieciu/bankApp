import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import Home from './screens/home';

export default function App() {
    return (
        <View>
            <StatusBar
                backgroundColor="#000"
                barStyle="light-content"
            />
            <Header text="Aplikacja bankowa" />
            <Home />
        </View>
    );
}