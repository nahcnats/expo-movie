import { View, Text } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../store/store';
import { logOut} from '../store/features/auth-slice';
import TabHeader from '../components/TabHeader';

const ProfileScreen = () => {
    const dispatch = useDispatch<AppDispatch>();
    
    return (
        <View className='flex-1'>
            <TabHeader initialLetter='My' title=' Profile' />
            <View className='flex-1 justify-center items-center'>
                <Text className='text-white' onPress={() => {
                    dispatch(logOut())
                }}>ProfileScreen</Text>
            </View>
        </View>
    );
};

export default ProfileScreen;