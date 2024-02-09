import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import colors from 'tailwindcss/colors';

import { IS_ANDROID } from '../utils';
// import {
//     HomeScreen,
//     MTScreen,
//     ScanScreen,
//     HistoryScreen,
//     ProfileScreen
// } from '../screens';
import { MainNavigationParams } from './MainNavigation';
import DashboardScreen from '../screens/DashboardScreen';
import AuthScreen from '../screens/AuthScreen';

type BottomTabNavigationParams = {
    Dashboard: undefined,
}

const BottomTab = createBottomTabNavigator<BottomTabNavigationParams>();
const iconSize = 24;
const iconActive = colors.green[700];
const iconInactive = colors.gray[300];

const BottomNavigation = () => {
    const navigation = useNavigation<NativeStackNavigationProp<MainNavigationParams>>();

    return (
        <BottomTab.Navigator
            initialRouteName='Dashboard'
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
                name="Dashboard"
                component={DashboardScreen}
            />
        </BottomTab.Navigator>
    );
}

export default BottomNavigation;