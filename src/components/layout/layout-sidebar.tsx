import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../store/store.ts";
import {motion} from 'motion/react'
import {Button} from "../ui/button.tsx";
import {toggleSidebar} from "../../store/slices/menu-slice.ts";

export function LayoutSidebar() {
    const menuOpen = useSelector((state: RootState) => state.menu.open);
    const dispatch = useDispatch();
    return (
        <motion.div
            initial={{right: '-100%'}}
            animate={{right: menuOpen? 0 : '-100%'}}
            className={'fixed bg-gray-400 w-full md:w-100 h-svh top-0'}>
            <Button onClick={()=>dispatch(toggleSidebar())} variant={'destructive'}>
                close
            </Button>
        </motion.div>
    )
}