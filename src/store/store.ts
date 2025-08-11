import {configureStore} from '@reduxjs/toolkit'
import themeReducer from "./slices/theme-slice.ts";
import menuReducer from "./slices/menu-slice.ts";
import authReducer from "./slices/auth-slice.ts";
import sidebarReducer from "./slices/sidebar-slice.ts";
import {authListener} from "./middleware/auth-listener.ts";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        menu: menuReducer,
        auth: authReducer,
        sidebar: sidebarReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(authListener.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
