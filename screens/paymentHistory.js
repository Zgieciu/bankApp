import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AccountsContext } from '../App';
import { bgColor, textColor } from '../styles/styles';
import { ScrollView } from 'react-native';

export default PaymentHistory = () => {
    const { activeAccount } = useContext(AccountsContext);
    const movements = [...activeAccount.movements].reverse();

    return (
        <View style={styles.container}>
            <ScrollView>
                {movements.map((mov, index) => {
                    if (mov > 0) {
                        return (
                            <View style={styles.movContainer} key={index}>
                                <Text style={styles.deposit}>Wpłata: </Text>
                                <Text style={styles.movement}>{mov}</Text>
                            </View>
                        );
                    } else {
                        return (
                            <View style={styles.movContainer} key={index}>
                                <Text style={styles.withdrawal}>Wypłata: </Text>
                                <Text style={styles.movement}>{mov}</Text>
                            </View>
                        );
                    }
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: bgColor,
    },
    movContainer: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 15,
    },
    movement: {
        flexGrow: 1,
        paddingRight: 60,
        fontSize: 40,
        textAlign: 'right',
        color: textColor,
    },
    deposit: {
        flexGrow: 1,
        paddingLeft: 60,
        fontSize: 40,
        color: 'green',
    },
    withdrawal: {
        flexGrow: 1,
        paddingLeft: 60,
        fontSize: 40,
        color: 'red',
    },
});