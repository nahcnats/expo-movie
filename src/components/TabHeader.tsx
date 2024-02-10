import { SafeAreaView, View, Text } from 'react-native';
import React from 'react';

interface TabHeaderProps {
    initialLetter: string,
    title: string
}

const TabHeader = ({ title, initialLetter }: TabHeaderProps) => {
    return (
        <SafeAreaView className='mb-4'>
            <Text className='text-2xl text-white font-bold self-center'><Text className='text-tertiary'>{initialLetter}</Text>{title}</Text>
        </SafeAreaView>
    );
};

export default TabHeader;