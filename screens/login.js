import React, { useContext, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import BtnLogin from '../components/btnLogin';
import { AccountsContext } from '../App';

export default Login = ({ navigation }) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const { accounts, setActiveAccount } = useContext(AccountsContext);

    const handleLoginChange = text => {
        setLogin(text);
    };

    const handlePasswordChange = text => {
        setPassword(text);
    };

    const handleLogin = () => {
        const loginCheck = accounts.find(account => account.login === login);
        if (loginCheck) {
            if (loginCheck.password === password) {
                setActiveAccount(accounts.find(account => account.id === loginCheck.id));
                goToAccount();
            } else {
                Alert.alert('Błąd logowania', 'Podano niepoprawne hasło, spróbuj jeszcze raz');
            }
        } else {
            Alert.alert('Błąd logowania', 'Konto o podanym loginie nie istnieje, spróbuj jeszcze raz');
        }
    };

    const goToAccount = () => navigation.navigate('Account');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Okno loowania</Text>
            <TextInput style={styles.input} placeholder='Login' value={login} onChangeText={handleLoginChange} />
            <TextInput style={styles.input} placeholder='Hasło' secureTextEntry={true} value={password} onChangeText={handlePasswordChange} />
            <BtnLogin btnFunction={handleLogin} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        marginTop: 150,
        fontSize: 30,
    },
    input: {
        width: 300,
        marginTop: 20,
        paddingLeft: 10,
        fontSize: 30,
        paddingVertical: 5,
        textAlign: 'left',
        borderWidth: 2,
        borderColor: '#000',
    },
})