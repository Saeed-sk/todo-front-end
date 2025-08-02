import {useSelector} from "react-redux";
import type {RootState} from "../store/store.ts";
import {Fragment, type ReactNode, useEffect} from "react";

export function ThemeWrapper({children}: { children: ReactNode }) {
    const theme = useSelector((state: RootState) => state.theme.mode)
    useEffect(() => {
        document.body.className = ''
        document.body.classList.add(theme)
    }, [theme])

    return (<Fragment>{children}</Fragment>)
}