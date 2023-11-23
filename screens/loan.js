import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default Loan = () => {
    return (
        <View style={styles.container}>
            <Text>Pożyczka</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
})