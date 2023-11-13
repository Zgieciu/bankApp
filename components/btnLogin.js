import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { mainColor, textColor } from '../styles/styles';

export default BtnLogin = ({ btnFunction }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={btnFunction}>
            <Text style={styles.buttonText}>Zaloguj się</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        padding: 10,
        borderColor: '#000',
        borderRadius: 10,
        borderWidth: 2,
        backgroundColor: mainColor,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 25,
        textTransform: 'uppercase',
        color: textColor,
    },
})