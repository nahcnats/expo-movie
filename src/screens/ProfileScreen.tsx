import { View, Text } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../store/store';
import { logOut} from '../store/features/auth-slice';

const ProfileScreen = () => {
    const dispatch = useDispatch<AppDispatch>();
    
    return (
        <View className='flex-1 justify-center items-center'>
            <Text onPress={() => {
                dispatch(logOut())
            }}>ProfileScreen</Text>
        </View>
    );
};

export default ProfileScreen;