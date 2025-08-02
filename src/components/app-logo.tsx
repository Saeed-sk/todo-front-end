import type {ReactNode} from "react";
import {Link} from "react-router";
import {cn} from "../lib/utils.ts";

interface Props {
    className?: string;
}

export function AppLogo({className}: Props): ReactNode {
    return (
        <Link className={cn('flex-center flex-col select-none', className)} to={'/'}>
            <i className={'text-shadow-lg transition-all flex-center flex-col text-blue-600 dark:text-amber-600 font-bold text-shadow-blue-300 dark:text-shadow-amber-900 text-3xl'}>
                <span>TODO</span>
            </i>
        </Link>
    )
}