import { View, Text, Dimensions, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { Image } from 'expo-image';
import Animated from 'react-native-reanimated';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { IS_ANDROID, customTransition } from '../utils';

import { useTrendingMovies } from '../hooks/useTrendingMovies';
import { TrendingMovie } from '../models/TrendingMovie';

import { MainNavigationParams } from '../navigators/MainNavigation';
import Loading from './Loading';
import Error from './Error';

interface MovieCardProps {
    item: TrendingMovie
}

const { width, height } = Dimensions.get('window');

const baseOptions = {
    vertical: false,
    width: width - 10,   
    height: height
} as const;

const TrendingMovies = () => {
    const navigation = useNavigation<NativeStackNavigationProp<MainNavigationParams>>();
    const [currentIdx, setCurrentIdx] = useState(0);
    const ref = React.useRef<ICarouselInstance>(null);
    
    const {
        isLoading,
        isSuccess,
        isError,
        data,
        error,
        refetch
    } = useTrendingMovies();

    const MovieCard = ({ item }: MovieCardProps) => {
        const imageUri = `${process.env.EXPO_PUBLIC_TMDB_IMAGE_PATH}/${item.poster_path}`;

        return (
            <Pressable
                onLongPress={() => navigation.navigate('MovieDetails', { movieId: item.id })}
                // onPress={() => navigation.navigate('MovieDetails', {movieId: item.id})}
            >
                <View className='justify-center items-center'>
                    <Animated.Image
                        // source={`${process.env.EXPO_PUBLIC_TMDB_IMAGE_PATH}/${item.poster_path}`}
                        source={{ uri: imageUri}}
                        style={{
                            width: width - 40,
                            height: height / 1.8                       
                        }}
                        // placeholder={item.title}
                        // contentFit="cover"
                        resizeMode='cover'
                        className='rounded-3xl mb-2 '
                        sharedTransitionTag="tag"
                        sharedTransitionStyle={customTransition} 
                    />
                    <Text className='text-white' numberOfLines={1} ellipsizeMode='tail'>{item.title}</Text>
                </View>
            </Pressable>
        )
    }

    if (isLoading && !data) {
        return <Loading />;
    }

    if (isError) {
        return <Error />;
    }

    return (
        <View className='mb-8 mx-2'>
            <Text className='text-lg text-white font-semibold mb-5'>Trending</Text>
            <Carousel
                {...baseOptions}
                ref={ref}
                loop={false}
                autoPlay={false}
                data={data || []}
                scrollAnimationDuration={1000}
                // onSnapToItem={(index: number) => setCurrentIdx(index)}
                renderItem={({item}) => <MovieCard item={item} />}
            />
        </View>
    );
};

export default TrendingMovies;