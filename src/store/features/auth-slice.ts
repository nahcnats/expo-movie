import AsyncStorage from '@react-native-async-storage/async-storage';

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
    username: null | string,
    password: null | string,
    request_token: null | string
}

type InitialState = {
    value: AuthState
}

const initialState = {
    value: {
        username: null,
        password: null,
        request_token: null
    }
} as InitialState;

const deleteCredentials = async (key: string)  => {
    await AsyncStorage.removeItem(key);
}

export const auth = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        logOut: () => {
            // deleteCredentials('CREDENTIALS');
            return initialState;
        },
        logIn: (state, action: PayloadAction<AuthState>) => {
            return { ...state, value: action.payload }
        },
    }
});

export const { logIn, logOut } = auth.actions;
export default auth.reducer;