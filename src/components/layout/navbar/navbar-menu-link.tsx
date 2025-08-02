import {Link} from "react-router";
import {Icons} from "../../ui/icons.tsx";
import {Button} from "../../ui/button.tsx";

import {Fragment} from "react";
import {useDispatch} from "react-redux";
import {toggleSidebar} from "../../../store/slices/menu-slice.ts";

export function NavbarMenuLink() {
    const dispatch = useDispatch();
    const user = false
    if (user) {
        return(
            <Link className={'hover:text-blue-400 dark:hover:text-red-400 transition-colors '} to="/login">
                <Icons className={'text-2xl'} name={'login'}/>
            </Link>
        )
    }
    return (
        <Fragment>
            <Button onClick={()=>dispatch(toggleSidebar())} size={'icon'}>
                <Icons name={'menu'}/>
            </Button>
        </Fragment>
    )
}