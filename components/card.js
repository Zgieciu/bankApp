import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { textColor } from '../styles/styles';

const formatNumber = number => {
    let tab = [];
    for (let i = 0; i <= 16; i += 4) {
        tab.push(number.toString().slice(i, i + 4));
        tab.push(' ');
    }
    return tab;
}

export default Card = ({ number, date }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{formatNumber(number)}</Text>
            <Text style={styles.date}>Ważna do: {date}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginHorizontal: 30,
        padding: 10,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#555',

    },
    number: {
        fontSize: 30,
        color: textColor,
    },
    date: {
        marginTop: 10,
        fontSize: 20,
        color: textColor,
    },
})