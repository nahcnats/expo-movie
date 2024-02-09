import React from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import colors from 'tailwindcss/colors';
import { useNavigation } from "@react-navigation/native";

// import { BackHeader } from '../components/common';
import BottomNavigation from './BottomNavigation';
import MovieDetailScreen from '../screens/MovieDetails';
import MovieReviewListingScreen from '../screens/MovieReviewListingScreen';

export type MainNavigationParams = {
    Dashboard: undefined,
    BottomTab: undefined | { screen?: string },
    MovieDetail: undefined,
    ReviewListing: undefined
}

const Stack = createNativeStackNavigator<MainNavigationParams>();

const MainNavigation = () => {
    const navigation = useNavigation<NativeStackNavigationProp<MainNavigationParams>>();

    const defaultNavOptions = {
        headerStyle: {
            backgroundColor: 'transparent'
        },
        headerShadowVisible: false,
        headerTintColor: colors.black,
    }

    return (
        <Stack.Navigator
            initialRouteName='BottomTab'
            screenOptions={defaultNavOptions}
        >
            <Stack.Screen
                name='BottomTab'
                component={BottomNavigation}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Group
                key='SubScreens'
                screenOptions={{
                    headerShown: true
                }}
            >
                <Stack.Screen
                    name='MovieDetail'
                    component={MovieDetailScreen}
                />
                <Stack.Screen
                    name='ReviewListing'
                    component={MovieReviewListingScreen}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
}

export default MainNavigation;