import { Platform, Keyboard } from "react-native";
import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { ReduceMotion, SharedTransition, withSpring } from 'react-native-reanimated';

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

const springConfig = {
    duration: 2000,
    dampingRatio: 0.4,
    stiffness: 100,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 2,
    reduceMotion: ReduceMotion.System,
}

export const customTransition = SharedTransition.custom((values) => {
    console.log('target', values)
    'worklet';
    
    return {
        // height: withSpring(values.targetHeight, springConfig),
        // width: withSpring(values.targetWidth, springConfig),
        height: withSpring(values.targetHeight),
        width: withSpring(values.targetWidth),
        // originX: withSpring(values.targetOriginX, springConfig),
        // originY: withSpring(values.targetOriginY, springConfig),
    };
});