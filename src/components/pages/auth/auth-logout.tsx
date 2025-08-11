import {logoutApi} from "../../../api/auth/logout.ts";
import type {ReactNode} from "react";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "../../../store/store.ts";
import {changeUser} from "../../../store/slices/auth-slice.ts";
import {cn} from "../../../lib/utils.ts";

export function AuthLogout({children, className}: { children: ReactNode, className?: string }) {
    const token = localStorage.getItem("token");
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    async function logout() {
        if (token !== null) {
            await logoutApi(token);
            dispatch(changeUser({token: null}));
            navigate("/login");
        } else {
            console.error("Token not logged in.");
        }
    }

    return (
        <div className={cn('cursor-pointer', className)} onClick={logout}>
            {children}
        </div>
    )
}