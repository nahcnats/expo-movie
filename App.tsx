import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AlertNotificationRoot } from 'react-native-alert-notification';

import { persistor, store } from './src/store/store';
import { queryClient, IS_ANDROID } from './src/utils';

import RootNavigation from './src/navigators/RootNavigation';

export default function App() {
	const apiUrl = process.env.EXPO_PUBLIC_TMDB_API_URL;
	// https://api.themoviedb.org/3/movie/550?api_key=b9b6ad5fc69b3470854e6afcd6cf5032

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Provider store={store}> 
				<PersistGate loading={null} persistor={persistor}>
					<QueryClientProvider client={queryClient}>
						<SafeAreaProvider>
							<AlertNotificationRoot toastConfig={{ titleStyle: { color: 'red' } }}>
								<StatusBar style="auto" />
								<RootNavigation />
							</AlertNotificationRoot>
						</SafeAreaProvider>
					</QueryClientProvider>
				</PersistGate>
			</Provider>
		</GestureHandlerRootView>
	);
};
