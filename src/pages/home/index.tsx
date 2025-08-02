import {MultiDatePicker} from "../../components/pages/date-picker/multi-date-picker.tsx";
import {MainClockShow} from "../../components/pages/clock/main-clock-show.tsx";
import {ProtectedRoute} from "../../components/pages/auth/protected-routes.tsx";


export function HomePage() {
    return (
        <ProtectedRoute>
                <div className={'relative z-10 w-full h-[300svh] bg-stone-100/50  dark:bg-gray-900 /60 text-white text-2xl px-10 '}>
                    <MultiDatePicker/>
                    <MainClockShow/>
                </div>
                <div className={'fixed flex-center left-1/5 bottom-1/2 z-0 scale-y-200 contrast-200'}>
                    <div
                        className={'w-40 h-40 top-10 rounded-full bg-radial from-amber-400 absolute blur-xl mix-blend-exclusion'}/>
                    <div className={'w-40 h-40 left-10 top-0 rounded-full bg-radial from-blue-500 blur-xl absolute'}/>
                    <div className={'w-40 h-40  rounded-full bg-radial from-accent-foreground blur-xl absolute'}/>
                </div>
        </ProtectedRoute>
    )
}