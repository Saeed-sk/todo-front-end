import React, {Fragment, type ReactNode} from "react";
import {AuthParticles} from "../pages/auth/particles/auth-particles.tsx";
import {AppLogo} from "../app-logo.tsx";
interface Props {
    children: ReactNode
    title?: string
}
export function LayoutAuth({children, title}:Props) {
    return (
        <Fragment>
            <div className={'flex-center flex-1 h-full relative z-10'}>
                <div
                    className={'max-w-sm w-full p-10 border border-orange-200 dark:border-orange-900 rounded-lg bg-gray-50/50 backdrop-blur-lg dark:bg-gray-700/50'}>
                    <AppLogo className={'mb-3'}/>
                    {title && <h2 className={'text-2xl'}>{title}</h2>}
                    {children}
                </div>
            </div>
            <div className={'fixed w-full h-full blur-lg left-0 top-0 '}>
                <AuthParticles/>
            </div>
        </Fragment>
    )
}