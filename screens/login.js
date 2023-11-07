import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default Login = ({ navigation }) => {

    const goToAccount = () => navigation.navigate('Account');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Okno logowania</Text>
            <TextInput style={styles.input} placeholder='Login' />
            <TextInput style={styles.input} placeholder='Hasło' />
            <TouchableOpacity style={styles.button} onPress={goToAccount}>
                <Text style={styles.buttonText}>Zaloguj się</Text>
            </TouchableOpacity>
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
    button: {
        marginTop: 20,
        padding: 10,
        borderColor: '#000',
        borderWidth: 2,
        backgroundColor: 'darkblue',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 25,
        textTransform: 'uppercase',
        color: '#fff',
    },
})