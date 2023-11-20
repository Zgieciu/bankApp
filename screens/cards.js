import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { bgColor } from '../styles/styles';

export default Cards = () => {
    return (
        <View style={styles.container}>
            <Text>Karty</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: bgColor,
    },
})