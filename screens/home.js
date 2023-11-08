import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import BtnLogin from '../components/btnLogin';

export default Home = ({ navigation }) => {

    const login = () => navigation.navigate('Login');


    return (
        <View>
            <View style={styles.container}>
                <FontAwesome name="bank" style={styles.icon} />
                <Text style={styles.text}>Witaj w naszej aplikacji</Text>
                <Text>Zaloguj się aby kontynuować</Text>
                <BtnLogin btnFunction={login} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        marginTop: 50,
        fontSize: 200,
        color: 'darkblue',
    },
    text: {
        marginTop: 80,
        fontSize: 20,
    },
})