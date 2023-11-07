import { StatusBar, View } from 'react-native';
import StackNavigation from './components/stackNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar
                backgroundColor="#000"
                barStyle="light-content"
            />
            <StackNavigation />
        </NavigationContainer>
    );
}