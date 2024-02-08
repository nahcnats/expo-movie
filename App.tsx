import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});