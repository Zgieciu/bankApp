import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        backgroundColor: 'darkblue',
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff',
    },
})