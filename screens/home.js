import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import BtnLogin from '../components/btnLogin';
import { bgColor, mainColor, textColor } from '../styles/styles';

export default Home = ({ navigation }) => {

    const login = () => navigation.navigate('Login');

    return (
        <View style={styles.container}>
            <FontAwesome name="bank" style={styles.icon} />
            <Text style={styles.text}>Witaj w naszej aplikacji</Text>
            <Text style={{ color: '#fff' }}>Zaloguj się aby kontynuować</Text>
            <BtnLogin btnFunction={login} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: bgColor,
    },
    icon: {
        marginTop: 50,
        fontSize: 200,
        color: mainColor,
    },
    text: {
        marginTop: 80,
        fontSize: 20,
        color: textColor,
    },
})