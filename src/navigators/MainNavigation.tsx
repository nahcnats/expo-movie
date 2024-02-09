import React from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import colors from 'tailwindcss/colors';
import { useNavigation } from "@react-navigation/native";

import BottomNavigation from './BottomNavigation';
// import {
//     MerchantProfileScreen
// } from '../screens/merchant'
// import {
//     MTTransactionsScreen
// } from '../screens/mt/tabs'
// import { ScanScreen } from '../screens';
// import {
//     PayformScreen,
//     PayVerifyScreen,
//     ForgotPINScreen,
//     PINOTPScreen,
//     RegisterPINScreen,
//     PaySuccessScreen
// } from '../screens/pay';
// import {
//     VouchersScreen,
//     PaymentsScreen,
//     RewardsScreen
// } from '../screens/history/tabs';
// import {
//     VoucherPurchaseScreen,
//     VoucherPaymentLoadingScreen,
//     VoucherPurchaseSuccessScreen
// } from '../screens/voucher';
// import { BackHeader } from '../components/common';

export type MainNavigationParams = {
    Dashboard: undefined,
    BottomTab: undefined | { screen?: string },
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
        </Stack.Navigator>
    );
}

export default MainNavigation;