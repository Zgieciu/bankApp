import React, { useContext, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { AccountsContext } from '../App';
import getCards from '../data/cardsData';
import Btn from '../components/btn';
import { bgColor, lightBgColor, mainColor, textColor, } from '../styles/styles';

export default Login = ({ navigation }) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isFocusedLogin, setIsFocusedLogin] = useState(false);
    const [isFocusedPassword, setIsFocusedPassword] = useState(false);
    const { accounts, setActiveAccount } = useContext(AccountsContext);
    const { setCards } = useContext(AccountsContext);

    const goToAccount = () => navigation.navigate('TabNavigation');

    const handleLoginFocus = () => setIsFocusedLogin(!isFocusedLogin);
    const handlePasswordFocus = () => setIsFocusedPassword(!isFocusedPassword);

    const handleLoginChange = text => setLogin(text);
    const handlePasswordChange = text => setPassword(text);

    const handleLogin = () => {
        const loginCheck = accounts.find(account => account.login === login);
        if (loginCheck) {
            if (loginCheck.password === password) {
                setActiveAccount(accounts.find(account => account.id === loginCheck.id));
                getCards(setCards, loginCheck.id);
                goToAccount();
            } else {
                Alert.alert('Błąd logowania', 'Podano niepoprawne hasło, spróbuj jeszcze raz');
            }
        } else {
            Alert.alert('Błąd logowania', 'Konto o podanym loginie nie istnieje, spróbuj jeszcze raz');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Okno loowania</Text>
            <TextInput
                style={[styles.input, isFocusedLogin && styles.inputFocused]}
                placeholder='Login'
                placeholderTextColor='#555'
                value={login}
                onChangeText={handleLoginChange}
                onFocus={handleLoginFocus}
                onBlur={handleLoginFocus}
            />
            <TextInput
                style={[styles.input, isFocusedPassword && styles.inputFocused]}
                placeholder='Hasło'
                placeholderTextColor='#555'
                secureTextEntry={true}
                value={password}
                onChangeText={handlePasswordChange}
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordFocus}
            />
            <Btn text='Zaloguj sie' btnFunction={handleLogin} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: bgColor,
    },
    text: {
        marginTop: 150,
        fontSize: 30,
        color: textColor,
    },
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