import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import {
    persistReducer,
    persistStore,
} from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    authReducer,
} from './features';

const persistConfig = {
    storage: AsyncStorage,
    key: 'root',
};

const rootReducer = combineReducers({
    authReducer,
});

const saveCredentials = async (key: string, value: string) => {
    await AsyncStorage.setItem(key, value);
}

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            thunk: true,
            serializableCheck: false
        })
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const persistor = persistStore(store);