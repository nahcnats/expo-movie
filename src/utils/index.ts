import { Platform, Keyboard } from "react-native";
import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const queryClient = new QueryClient();
export const IS_ANDROID = Platform.OS === 'android';

export const server = axios.create({
    baseURL: process.env.EXPO_PUBLIC_TMDB_BASE_URL,
});

export const dismissKeyboard = () => {
    Keyboard.dismiss();
    return false;
}

export const apiErrorHandler = (error: Error) => {
    let message = 'Opps, something went wrong!';

    if (error.message) {
        message = error.message;
    }

    return new Error(message);
}