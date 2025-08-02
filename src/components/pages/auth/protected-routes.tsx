import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {Navigate, useLocation} from "react-router";
import type {RootState} from "../../../store/store.ts";

interface Props {
    children: React.ReactNode;
}

export function ProtectedRoute({children}: Props) {
    const token = useSelector((state: RootState) => state.auth.token);
    const location = useLocation();

    if (!token) {
        return <Navigate to="/login" replace state={{from: location}}/>;
    }

    return (
        <Fragment>
            {children}
        </Fragment>
    );
}
