import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from '../screens/account';
import Cantor from '../screens/cantor';
import Loan from '../screens/loan';
import Transfer from '../screens/transfer';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { bgColor, mainColor, textColor, } from '../styles/styles';

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarActiveTintColor: bgColor,
    tabBarInactiveTintColor: textColor,
    tabBarStyle: { backgroundColor: mainColor },
    tabBarHideOnKeyboard: true,
    unmountOnBlur: true,
}

const tabOptions = {
    headerShown: false,
    tabBarLabel: () => null,
}

export default TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name='Account'
                component={Account}
                options={{
                    ...tabOptions,
                    tabBarIcon: ({ color }) => <MaterialIcons name="account-balance-wallet" size={35} color={color} />
                }}
            />
            <Tab.Screen name='Transfer'
                component={Transfer}
                options={{
                    ...tabOptions,
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="bank-transfer" size={50} color={color} />
                }}
            />
            <Tab.Screen
                name='Loan'
                component={Loan}
                options={{
                    ...tabOptions,
                    tabBarIcon: ({ color }) => <MaterialIcons name="attach-money" size={40} color={color} />
                }}
            />
            <Tab.Screen
                name='Cantor'
                component={Cantor}
                options={{
                    ...tabOptions,
                    tabBarIcon: ({ color }) => <FontAwesome name="exchange" size={30} color={color} />
                }}
            />
        </Tab.Navigator>
    );
}