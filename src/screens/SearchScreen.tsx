import { 
    View, 
    Text, 
    SafeAreaView, 
    Dimensions, 
    TextInput, 
    TouchableOpacity,
    ScrollView, 
    Pressable
} from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from 'expo-image';

import { MainNavigationParams } from '../navigators/MainNavigation';
import Loading from '../components/Loading';
import Error from '../components/Error';

const { width, height } = Dimensions.get('window');

const SearchScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<MainNavigationParams>>();
    const [results, setResults] = useState<number[]>([1,2,3]);
    
    return (
        <SafeAreaView className='flex-1'>
            <View className='mx-4 mb-3 flex-row justify-between items-center border border-tertiary rounded-full'>
                <TextInput 
                    placeholder='Search Movie'
                    placeholderTextColor={'lightgray'}
                    className='pb-1 pl-6 flex-1 text-sm font-semibold text-white'
                />
                <TouchableOpacity
                    className='rounded-full p-3 m-1'
                    onPress={() => navigation.navigate('BottomTab')}
                >
                    <AntDesign name="closecircleo" size={24} color="lightgray" />
                </TouchableOpacity>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                className='space-y-3'
            >
                <Text className='text-white text-ms font-semibold ml-1'>Results {results.length}</Text>
                <View className='flex-row justify-between flex-wrap'>
                    {
                        results.map((item, index) => {
                            return (
                                <Pressable
                                    key={index}
                                    onPress={() => navigation.push('MovieDetails', {movieId: 1})}
                                >
                                    <View className='space-y-2 mb-4'>
                                        <Image
                                            className='rounded-3xl'
                                            source='https://www.themoviedb.org/t/p/w1280/A7EByudX0eOzlkQ2FIbogzyazm2.jpg'
                                            style={{
                                                width: width * 0.44,
                                                height: height * 0.3
                                            }}
                                        />
                                        <Text className='text-xs text-neutral-400' numberOfLines={1} ellipsizeMode='tail'>Aquaman</Text>
                                    </View>
                                </Pressable>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SearchScreen;