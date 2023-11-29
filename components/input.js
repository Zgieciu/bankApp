import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { lightBgColor, textColor, mainColor } from '../styles/styles';

export default Input = ({ changeFunction, password = false, text, type = 'default', value }) => {

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(!isFocused);

    return (
        <View>
            <TextInput
                style={[styles.input, isFocused && styles.inputFocused]}
                placeholder={text}
                placeholderTextColor='#555'
                keyboardType={type}
                secureTextEntry={password}
                value={value}
                onChangeText={changeFunction}
                onFocus={handleFocus}
                onBlur={handleFocus}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        width: 300,
        marginTop: 20,
        paddingLeft: 10,
        fontSize: 30,
        paddingVertical: 5,
        textAlign: 'left',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#302f2f',
        backgroundColor: lightBgColor,
        color: textColor,
    },
    inputFocused: {
        borderColor: mainColor,
    },
})