import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {fetchUser} from "../../../store/thunks/auth-thunk.ts";
import {changeUser} from "../../../store/slices/auth-slice.ts";

export function AuthLoader() {
    const dispatch = useDispatch<AppDispatch>();
    const status = useSelector((state: RootState) => state.auth.status);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            if (status === 'idle' || status === 'loading') {
                dispatch(fetchUser(token));
            }
        } else {
            dispatch(changeUser({user: null, token: null}));
        }
    }, [dispatch]);

    return null;
}