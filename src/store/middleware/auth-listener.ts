import {createListenerMiddleware, isAnyOf, type PayloadAction} from '@reduxjs/toolkit';
import {changeUser} from "../slices/auth-slice.ts";
import {fetchUser} from "../thunks/auth-thunk.ts";

interface AuthPayload {
    token: string | null
}

export const authListener = createListenerMiddleware();

authListener.startListening({
    matcher: isAnyOf(changeUser),
    effect: async (_action: PayloadAction<AuthPayload>, listenerApi) => {
        const token = localStorage.getItem("token");
        if (token) {
            listenerApi.dispatch(fetchUser(token));
        }
    }
});