import { View, Text, TextInput, Button } from 'react-native';
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

const FormError = ({errorMessage} : {errorMessage: string}) => {
    return (
        <Text className='text-red-500 text-sm'>{errorMessage}</Text>
    ); 
}

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
        <View className='flex-1 justify-center items-center'>
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
                        />
                    )
                }}
            />
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
                            secureTextEntry
                        />
                    )
                }}
            />
            <Button title='Sign In' onPress={() => methods.handleSubmit(onSubmit)} />
        </View>
    );
};

export default AuthScreen;