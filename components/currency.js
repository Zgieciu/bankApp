import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { textColor } from '../styles/styles';

export default Currency = ({ currency, value }) => {

    const getSymbol = currency => {
        let symbol = '';

        switch (currency) {
            case "EUR":
                symbol = "€";
                break;
            case "USD":
                symbol = "$";
                break;
            case "GBP":
                symbol = "£";
                break;
            case "CHF":
                symbol = "Fr.";
                break;
            case "AED":
                symbol = "د.إ";
                break;
            case "AUD":
                symbol = "A$";
                break;
        }

        return symbol;
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.currency, value === 0 && styles.empty]}>{currency}:</Text>
            <Text style={[styles.text, , styles.value, value === 0 && styles.empty]}>{value} {getSymbol(currency)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        marginVertical: 20,
    },
    text: {
        flexGrow: 1,
        fontSize: 30,
        color: textColor,
    },
    currency: {
        paddingLeft: 100,
    },
    value: {
        textAlign: 'right',
        paddingRight: 100,
    },
    empty: {
        color: '#555',
    },
})