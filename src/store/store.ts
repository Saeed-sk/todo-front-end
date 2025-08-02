import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './slices/counter-slice.ts'
import themeReducer from "./slices/theme-slice.ts";
import menuReducer from "./slices/menu-slice.ts";
import authReducer from "./slices/auth-slice.ts";
import {authListener} from "./middleware/auth-listener.ts";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        theme: themeReducer,
        menu: menuReducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(authListener.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
