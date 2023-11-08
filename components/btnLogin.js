import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default BtnLogin = ({ btnFunction }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={btnFunction}>
            <Text style={styles.buttonText}>Zaloguj się</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
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
})