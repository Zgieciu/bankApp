import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { bgColor, textColor } from '../styles/styles';

export default CreditCard = () => {
    return (
        <View style={styles.container}>
            <Text>Karty kredytowe</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: bgColor,
    },
})