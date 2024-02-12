import { View, Text, TouchableOpacity } from 'react-native';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import {
    BottomSheetModal,
    useBottomSheetModal,
} from '@gorhom/bottom-sheet';
import { Rating } from 'react-native-ratings';
import colors from 'tailwindcss/colors';

import { useRefreshOnFocus } from '../hooks/useFreshOnFocus';
import { useReviews } from '../hooks/useReviews';
import { useAppSelector } from '../store/store';
import { useProfile } from '../hooks/useProfile';
import { useRatings } from '../hooks/useRatings';
import { useRemoveRating } from '../hooks/useRemoveRating';

import Error from './Error';
import Loading from './Loading';
import ModalBottomsheet from './BottomSheetModal';

interface MovieDetailsFooterProps {
    movieId: number
}

const MovieDetailsFooter = ({ movieId }: MovieDetailsFooterProps) => {
    const { request_token } = useAppSelector(state => state.authReducer.value);
    const [isRated, setIsRated] = useState(false);
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const { dismiss } = useBottomSheetModal();
    const [showDetail, setShowDetail] = useState(false);
    const snapPoints = useMemo(() => ['25%'], []);

    const {
    	isLoading: isProfileLoading,
    	isSuccess: isProfileSuccess,
    	isError: isProfileError,
    	data: profile,
    	error: profileError,
    	refetch: profileRefetch
    } = useProfile({ session_id: request_token });

    const {
        isLoading,
        isSuccess,
        isError,
        data,
        error,
        refetch
    } = useReviews({ movieId: movieId });

    const {
        isLoading: isRatingLoading,
        isSuccess: isRatingSuccess,
        isError: isRatingError,
        data: ratings,
        error: ratingsError,
        refetch: ratingRefetch
    } = useRatings({ account_id: profile?.id || 0 });

    useRefreshOnFocus(profileRefetch);
    useRefreshOnFocus(refetch);
    useRefreshOnFocus(ratingRefetch);

    const { mutateAsync: deleteRating } = useRemoveRating();

    useEffect(() => {
        // TODO: Not the best way to filter data. API should handle this
        const ratedMovie = ratings?.results.filter(item => item.id === movieId);

        if (ratedMovie?.length) {
            setIsRated(true)
        }
    }, [isRatingSuccess]);

    const removeMovieRating = async () => {
        try {
            await deleteRating({
                movieId
            });

            setIsRated(false);
        } catch (err: any) {
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Error',
                textBody: err.message,
                autoClose: 2000,
            });
        }
    }

    const closeBottomSheet = useCallback(() => {
        setShowDetail(false);

        dismiss()
    }, [showDetail]);

    const handleBottomSheetChanges = useCallback(() => {
        setShowDetail(v => !v);

        if (showDetail) {
            dismiss()
        } else {
            bottomSheetRef.current?.present();
        }
    }, [showDetail]);

    if ((isLoading || isProfileLoading || isRatingLoading) && (!data || !profile || !ratings)) {
        return <Loading />;
    }

    if (isError || isProfileError || isRatingError) {
        return <Error />;
    }
    
    return (
        <View className='flex-row justify-around items-center mt-12 mb-12 mx-4'>
            <TouchableOpacity
                className='items-center'
            >
                <MaterialIcons name="reviews" size={24} color='white' />
                <Text className='text-sm text-white font-semibold'><Text className='text-tertiary'>{data?.total_results}</Text> Review{data?.total_results === 1 ? '' : 's'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                className='items-center'
                onPress={() => {
                    if (isRated) {
                        removeMovieRating();
                    } else {
                        handleBottomSheetChanges();
                    }
                }}
            >
                <AntDesign name='star' size={24} color={isRated ? colors.yellow[500] : 'white'} />
                <Text className={`text-sm ${isRated ? 'text-yellow-500' : 'text-white'} font-semibold`}>{!isRated ? 'Rate' : 'Unrate'}</Text>
            </TouchableOpacity>
            <ModalBottomsheet
                ref={bottomSheetRef}
                onClose={closeBottomSheet}
                customSnapPoints={snapPoints}
            >
                <View><Text>Rate Here</Text></View>
            </ModalBottomsheet>
        </View>
    );
};

export default MovieDetailsFooter;