import {type ReactNode} from "react";
import {AuthParticles} from "../pages/auth/particles/auth-particles.tsx";

interface Props {
    children: ReactNode
    title?: string
    subtitle?: string
}

export function LayoutAuth({children, title, subtitle}: Props) {
    return (
        <main className={'pt-18 max-w-1440 flex-1 h-full flex flex-col mx-auto w-full relative overflow-clip'}>
            <div className={'flex-center flex-1 h-full relative z-10'}>
                <div
                    className={'md:rounded-lg md:max-w-sm w-full p-5 md:p-8 border-y md:border border-orange-200 dark:border-orange-900 bg-gray-50/50 backdrop-blur-lg dark:bg-gray-700/50'}>
                    <div className={'flex-center flex-col gap-2 mb-5'}>
                        {title &&
                            <h2 className={'text-lg md:text-xl font-bold text-gray-900 dark:text-gray-200'}>{title}</h2>}
                        {subtitle &&
                            <p className={'text-xs md:text-sm text-gray-600 dark:text-gray-300 font-medium text-center'}>{subtitle}</p>}
                    </div>
                    {children}
                </div>
            </div>
            <div className={'fixed w-full h-full blur-lg left-0 top-0 '}>
                <AuthParticles/>
            </div>
        </main>
    )
}