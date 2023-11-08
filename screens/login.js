import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import BtnLogin from '../components/btnLogin';

export default Login = ({ navigation }) => {

    const goToAccount = () => navigation.navigate('Account');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Okno logowania</Text>
            <TextInput style={styles.input} placeholder='Login' />
            <TextInput style={styles.input} placeholder='Hasło' />
            <BtnLogin btnFunction={goToAccount} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        marginTop: 150,
        fontSize: 30,
    },
    input: {
        width: 300,
        marginTop: 20,
        paddingLeft: 10,
        fontSize: 30,
        paddingVertical: 5,
        textAlign: 'left',
        borderWidth: 2,
        borderColor: '#000',
    },
})