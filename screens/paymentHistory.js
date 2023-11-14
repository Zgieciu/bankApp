import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { bgColor } from '../styles/styles';

export default PaymentHistory = () => {
    return (
        <View style={styles.container}>
            <Text>Historia płatności</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: bgColor,
    },
});