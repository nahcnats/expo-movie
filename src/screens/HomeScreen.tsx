import { 
    View,
    ScrollView,
    SafeAreaView, 
    Text
} from 'react-native';
import React from 'react';

import TabHeader from '../components/TabHeader';
import TrendingMovies from '../components/TrendingMovies';
import Search from '../components/Search';

const HomeScreen = () => {
    return (
        <View className='flex-1'>
            <TabHeader initialLetter='M' title='ovies' />
            <ScrollView
                contentContainerStyle={{
                    justifyContent: 'center'
                }}
            >
                <Search />
                <View className='my-2' />
                <TrendingMovies />
            </ScrollView>
        </View>
    );
};

export default HomeScreen;