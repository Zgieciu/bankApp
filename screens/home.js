import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default Home = () => {
    return (
        <View style={styles.container}>
            <FontAwesome name="bank" style={styles.icon} />
            <Text style={styles.text}>Witaj w naszej aplikacji</Text>
            <Text style={styles}>Zaloguj się aby kontynuować</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Zaloguj się</Text>
            </TouchableOpacity>
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