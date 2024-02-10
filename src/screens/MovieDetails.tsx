import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";

import { MainNavigationParams } from '../navigators/MainNavigation';
import { useMovie } from '../hooks/useMovie';


type Props = NativeStackScreenProps<MainNavigationParams, 'MovieDetails'>;

const MovieDetailScreen = ({ route }: Props) => {
	const { movieId } = route.params;
	const {
		isLoading,
		isSuccess,
		isError,
		data,
		error,
		refetch
	} = useMovie({ movieId: movieId });

	if (isLoading && !data) {
		return null;
	}

	if (isError) {
		return null;
	}

	return (
		<View className='flex-1 justify-center items-center'>
			<Text className='text-white'>{data?.title}</Text>
		</View>
	);
};

export default MovieDetailScreen;