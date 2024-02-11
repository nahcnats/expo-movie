import { 
	ScrollView, 
	View, 
	Text, 
	SafeAreaView, 
	TouchableOpacity,
	Dimensions
} from 'react-native';
import React, { useState } from 'react';
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import colors from 'tailwindcss/colors';

import { IS_ANDROID } from '../utils';

import { MainNavigationParams } from '../navigators/MainNavigation';
import { useMovie } from '../hooks/useMovie';
import { useRefreshOnFocus } from '../hooks/useFreshOnFocus';
import { useProfile } from '../hooks/useProfile';
import { useAppSelector } from '../store/store';
import { useReviews } from '../hooks/useReviews';
import MovieDetailsFooter from '../components/MovieDetailFooter';

const { width, height } = Dimensions.get('window');
const topMargin = IS_ANDROID ? 'mt-3' : ''

type Props = NativeStackScreenProps<MainNavigationParams, 'MovieDetails'>;

const MovieDetailScreen = ({ route }: Props) => {
	const { request_token } = useAppSelector(state => state.authReducer.value);
	const navigation = useNavigation<NativeStackNavigationProp<MainNavigationParams>>();
	const { movieId } = route.params;
	const [isWatchList, setIsWatchList] = useState(false);

	const {
		isLoading,
		isSuccess,
		isError,
		data,
		error,
		refetch
	} = useMovie({ movieId: movieId });

	// const {
	// 	isLoading: isProfileLoading,
	// 	isSuccess: isProfileSuccess,
	// 	isError: isProfileError,
	// 	data: profile,
	// 	error: profileError,
	// 	refetch: profileRefetch
	// } = useProfile({ session_id: request_token });

	useRefreshOnFocus(refetch);

	if (isLoading && !data) {
		return null;
	}

	if (isError) {
		return null;
	}

	return (
		<ScrollView
			className='flex-1'
		>
			<View className='w-full'>
				<SafeAreaView className={`absolute z-20 w-full flex-row justify-between item-center px-4 ${topMargin}`}>
					<TouchableOpacity
						onPress={() => navigation.goBack()}
					>
						<Ionicons name="chevron-back-circle" size={34} color='#01b4e4' />	
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => setIsWatchList(v => !v)}
					>
						<Fontisto name='favorite' size={30} color={isWatchList ? colors.yellow[500] : colors.white} />
					</TouchableOpacity>
				</SafeAreaView>
				<View>
					<Image
						source={`${process.env.EXPO_PUBLIC_TMDB_IMAGE_PATH}/${data?.poster_path}`}
						style={{
							width: width,
							height: height * 0.55
						}}
						placeholder={data?.title}
						contentFit="cover"
						className='rounded-3xl mb-2 '
					/>
					<LinearGradient
						colors={['transparent', 'rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 1)']}
						style={{
							width,
							height: height * 0.40
						}}
						start={{ x: 0.5, y: 0 }}
						end={{ x: 0.5, y: 1 }}
						className='absolute bottom-0'
					/>
				</View>
			</View>
			<View style={{ marginTop: -height * 0.09}} className='space-y-3'>
				<Text className='text-white text-center text-2xl font-bold tracking-wider'>{data?.title}</Text>
				<Text
					className='text-neutral-400 font-semibold text-sm text-center'
				>
					{`${data?.status} * ${data?.release_date} * ${data?.runtime} min`}
				</Text>
				<View className='flex-row justify-center mx-4 space-x-2'>
					{
						data?.genres.map((item) => 
							<Text
								key={item.id}
								className='text-neutral-400 font-semibold text-sm text-center'
							>
								{item.name}
							</Text>
						)
					}
				</View>
				<Text
					className='text-neutral-400 mx-4 tracking-wide text-sm'
				>
					{data?.overview}
				</Text>
				<MovieDetailsFooter movieId={movieId} />
				{/* Show Movie Reviews
				Post Rating
				Delete Rating
				Add to Watchlist */}
			</View>
		</ScrollView>
	);
};

export default MovieDetailScreen;