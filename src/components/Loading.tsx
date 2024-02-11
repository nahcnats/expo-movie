import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';

const Loading = () => {
    return (
        <View className='flex-1 justify-center items-center'>
            <ActivityIndicator size={34} />
        </View>
    );
};

export default Loading;