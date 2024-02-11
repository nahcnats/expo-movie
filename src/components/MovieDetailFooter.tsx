import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { useRefreshOnFocus } from '../hooks/useFreshOnFocus';
import { useReviews } from '../hooks/useReviews';

interface MovieDetailsFooterProps {
    movieId: number
}

const MovieDetailsFooter = ({ movieId }: MovieDetailsFooterProps) => {

    const {
        isLoading,
        isSuccess,
        isError,
        data,
        error,
        refetch
    } = useReviews({ movieId: movieId });
    useRefreshOnFocus(refetch);

    if (isLoading && !data) {
        return null;
    }

    if (isError) {
        return null;
    }
    
    return (
        <View className='flex-row justify-center mt-8 mx-4 space-x-2'>
            <TouchableOpacity>
                <Text className='text-base text-white font-semibold'><Text className='text-tertiary'>{data?.total_results}</Text> Review{data?.total_results === 1 ? '' : 's'}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text className='text-base text-white font-semibold'>Rate</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MovieDetailsFooter;