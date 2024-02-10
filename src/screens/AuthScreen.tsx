import { View, Text, Pressable, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Controller,
    FormProvider,
    SubmitHandler,
    useForm,
} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ALERT_TYPE, Toast, Dialog } from 'react-native-alert-notification';

import { AppDispatch, useAppSelector } from '../store/store';
import { IS_ANDROID, dismissKeyboard } from '../utils';

import CustomTextInput from '../components/CustomTextInput';

const signInFormSchema = z.object({
    username: z
        .string({
            required_error: 'Username is required',
            invalid_type_error: 'Name must be a string'
        })
        .min(2),
    password: z
        .string({
            required_error: 'Password is required',
            invalid_type_error: 'Password must be a string'
        })
        .min(2),
});

type TSignInFormSchema = z.infer<typeof signInFormSchema>;

const AuthScreen = () => {
    const dispatch = useDispatch<AppDispatch>();

    const methods = useForm<TSignInFormSchema>({
        resolver: zodResolver(signInFormSchema),
        defaultValues: {
            username: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<TSignInFormSchema> = async (data) => {

    }

    return (

        <KeyboardAvoidingView 
            className='flex-1'  
            behavior={!IS_ANDROID ? 'padding' : 'height'}
            onStartShouldSetResponder={dismissKeyboard}
        >
            <View className='flex-1 justify-center p-4'>
                <View className='mb-12 justify-center items-center'>
                    <Text className='text-lg text-secondary font-bold'>Movie App</Text>
                </View>
                <Controller
                    control={methods.control}
                    name='username'
                    render={({
                        field: { onChange, onBlur, value },
                        fieldState: { error },
                    }) => {
                        return (
                            <CustomTextInput
                                label='Username'
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                errorMessage={error?.message}
                                autoFocus={true}
                            />
                        )
                    }}
                />
                <View className='my-6' />
                <Controller
                    control={methods.control}
                    name='password'
                    render={({
                        field: { onChange, onBlur, value },
                        fieldState: { error },
                    }) => {
                        return (
                            <CustomTextInput
                                label='Password'
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                errorMessage={error?.message}
                                secureTextEntry={true}
                            />
                        )
                    }}
                />
                <Pressable
                    className='bg-primary self-center p-4 w-32 mt-16 rounded-lg'
                    onPress={() => methods.handleSubmit(onSubmit)}
                >
                    <Text className='text-sm text-white font-semibold self-center'>Sign In</Text>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    );
};

export default AuthScreen;