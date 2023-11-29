import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { textColor } from '../styles/styles';

export default Payment = ({ movType, mov, color }) => {
    return (
        <View style={styles.container}>
            <Text style={[{ color: color }, styles.type]}>{movType}</Text>
            <Text style={[{ color: color }, styles.movement]}>{mov.toFixed(2)}</Text>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 15,
    },
    type: {
        flexGrow: 1,
        paddingLeft: 30,
        fontSize: 40,
    },
    movement: {
        flexGrow: 1,
        paddingRight: 40,
        fontSize: 40,
        textAlign: 'right',
        color: textColor,
    },
})