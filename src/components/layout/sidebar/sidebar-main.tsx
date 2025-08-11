import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../../store/store.ts";
import {motion} from 'motion/react'
import {Button} from "../../ui/button.tsx";
import {toggleSidebar} from "../../../store/slices/menu-slice.ts";
import {SidebarContent} from "./sidebar-content.tsx";
import {cn} from "../../../lib/utils.ts";
import React, {Fragment} from "react";

interface Props {
    children: React.ReactNode;
    className?: string
}

export function SidebarMain({children, className}: Props) {
    const menuOpen = useSelector((state: RootState) => state.menu.open);
    const dispatch = useDispatch();

    return (
        <Fragment>
            <motion.aside
                initial={{left: '-100%'}}
                animate={{left: menuOpen ? 0 : '100%'}}
                className={cn('block lg:hidden absolute bg-sidebar w-full md:w-100 h-full ', className)}>
                <SidebarContent>
                    {children}
                </SidebarContent>
            </motion.aside>
            <aside
                className={cn('hidden lg:block bg-sidebar w-full md:w-100 h-full ', className)}>
                <Button className={'block lg:hidden'} onClick={() => dispatch(toggleSidebar())} variant={'destructive'}>
                    close
                </Button>
                <SidebarContent>
                    {children}
                </SidebarContent>
            </aside>
        </Fragment>
    )
}