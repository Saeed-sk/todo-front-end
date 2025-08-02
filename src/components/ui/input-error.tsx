import {cn} from "../../lib/utils.ts";

interface Props {
    error: string;
    className?: string;
}

export function InputError({error}: Props) {
    return (
        <p className={cn('text-sm mt-1 text-red-700 dark:text-red-500 pl-1')}>{error}</p>
    )
}