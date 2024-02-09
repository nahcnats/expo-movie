import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

export type AuthNavigationParams = {
    Login: undefined,
}

const Stack = createNativeStackNavigator<AuthNavigationParams>();

function LoginScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

export default function () {
    const defaultNavOptions = {
        headerStyle: {
            backgroundColor: 'transparent'
        },
        headerShadowVisible: false,
    }

    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={defaultNavOptions}
        >
            <Stack.Screen
                name='Login'
                component={LoginScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}

