import React, { useEffect } from 'react';
import { Alert, View } from 'react-native'
import { Accelerometer } from 'expo-sensors';

export const AccSensor = ({ navigation }) => {
    useEffect(() => {
        const subscription = Accelerometer.addListener(({ x, y, z }) => {
            const acceleration = Math.sqrt(x * x + y * y + z * z);
            if (acceleration > 1.5) {
                Alert.alert('Wylogowanie', 'Czy na pewno chcesz się wylogować ?', [
                    {
                        text: 'Nie',
                        style: 'cancel',
                    },
                    { text: 'Tak', onPress: () => navigation.navigate('Home') },
                ]);
            }
        });

        const cleanup = () => {
            subscription.remove();
        };

        return cleanup;
    }, []);

    return <View></View>;
};