import {toggleTheme} from "../../../store/slices/theme-slice.ts";
import {motion} from "motion/react";
import {Icons} from "../../ui/icons.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../../store/store.ts";
import type {ReactNode} from "react";
import {cn} from "../../../lib/utils.ts";

interface Props {
    className?: string,
}

export function NavbarThemeChange({className}: Props): ReactNode {
    const theme = useSelector((state: RootState) => state.theme.mode)
    const dispatch = useDispatch();
    return (
        <motion.button
            className={cn(className, 'cursor-pointer')}
            onClick={() => dispatch(toggleTheme())}
            key={theme}
            initial={{rotate: 0}}
            animate={{rotate: (theme !== 'dark' ? -30 : 90)}}
            transition={{duration: 0.1, delay: 0.1, ease: 'linear'}}
        >
            <Icons className={cn(theme === 'dark' ? 'text-gray-200' : 'text-gray-900')}
                   name={theme === 'dark' ? 'light' : 'dark'}/>
        </motion.button>
    )
}