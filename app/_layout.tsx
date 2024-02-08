import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

const RootLayoutNav = () => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<View
				className='flex-1 justify-center items-center'
			>
				<Text className='text-sky-500'>Open up App.tsx to start working on your app! {apiUrl}</Text>
				<StatusBar style="auto" />
			</View>
		</GestureHandlerRootView>
	);
};

export default RootLayoutNav;