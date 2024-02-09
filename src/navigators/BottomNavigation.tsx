import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import colors from 'tailwindcss/colors';

import { IS_ANDROID } from '../utils';
import { MainNavigationParams } from './MainNavigation';
import HomeScreen from '../screens/HomeScreen';
import WatctListScreen from '../screens/WatctListScreen';
import ProfileScreen from '../screens/ProfileScreen';

type BottomTabNavigationParams = {
    Home: undefined,
    WatchList: undefined,
    Profile: undefined
}

const BottomTab = createBottomTabNavigator<BottomTabNavigationParams>();

const BottomNavigation = () => {
    const navigation = useNavigation<NativeStackNavigationProp<MainNavigationParams>>();

    return (
        <BottomTab.Navigator
            initialRouteName='Home'
            backBehavior='history'
            screenOptions={{
                tabBarShowLabel: true,
                tabBarStyle: [
                    {
                        position: 'absolute',
                        borderTopWidth: 0,
                        borderTopColor: "transparent",
                        backgroundColor: 'white',
                        overflow: 'hidden',
                    },
                    IS_ANDROID && { height: 55, paddingBottom: 5 },
                ],
                tabBarLabelPosition: 'below-icon',
                headerShown: false
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
            />
            <BottomTab.Screen
                name="WatchList"
                component={WatctListScreen}
            />
            <BottomTab.Screen
                name="Profile"
                component={ProfileScreen}
            />
        </BottomTab.Navigator>
    );
}

export default BottomNavigation;