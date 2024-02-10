import { View, Text, TextInput as RNTextInput, TextInputProps, } from 'react-native';
import React from 'react';

import { IS_ANDROID } from '../utils';

interface CustomTextInputProp extends TextInputProps {
    label: string,
    children?: React.ReactNode,
    errorMessage?: string,
}

const CustomTextInput = ({ label, children, errorMessage, ...textInputProps }: CustomTextInputProp) => {
    return (
        <View>
            <Text>{label}</Text>
            <View>
                <RNTextInput
                    className={`flex-1 ${IS_ANDROID ? 'py-[2] px-[6]' : 'p-[6]'}`}
                    autoCorrect={false}
                    autoCapitalize="none"
                    {...textInputProps}
                />
                {children}
            </View>
            
            {!!errorMessage && (
                <Text className='text-red-500 text-sm'>{errorMessage}</Text>
            )}
        </View>
    );
}

export default CustomTextInput;