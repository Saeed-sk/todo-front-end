
import {cn} from "../../../lib/utils.ts";
import {SidebarHeader} from "./sidebar-header.tsx";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";


interface Props {
    className?: string
    children?: React.ReactNode
}

export function SidebarContent({children, className}: Props) {
    return (
        <ScrollContainer vertical={true} hideScrollbars={false}   className="h-full scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-300 dark:scrollbar-thumb-gray-700 dark:scrollbar-track-gray-900">
            <ul className={cn('flex-grow h-full flex flex-col py-4 gap-4 ', className)}>
                <li className={'px-5 mb-4'}>
                    <SidebarHeader/>
                </li>
                {children}
            </ul>
        </ScrollContainer>
    );
}

