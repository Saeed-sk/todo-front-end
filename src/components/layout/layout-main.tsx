import {PageTransition} from '../page-transition.tsx'
import {Outlet} from "react-router";
import {Fragment} from "react";
import {NavbarThemeChange} from "./navbar/navbar-theme-change.tsx";
import {AppLogo} from "../app-logo.tsx";
import {NavbarMenuLink} from "./navbar/navbar-menu-link.tsx";
import {AuthLoader} from "../pages/auth/auth-loader.tsx";

export const LayoutMain = () => {
    return (
        <Fragment>
            <AuthLoader/>
            <nav
                className={'w-full h-[70px] bg-navbar top-0 z-[999] shadow-xs shadow-gray-900/50 dark:shadow-gray-100/40'}>
                <ul className={'max-w-1440 flex-center justify-between mx-auto py-4 px-4 lg:px-10'}>
                    <li>
                        <AppLogo/>
                    </li>
                    <li className={'flex-center gap-2 text-2xl '}>
                        <NavbarMenuLink/>
                        <NavbarThemeChange/>
                    </li>
                </ul>
            </nav>
            <Outlet/>
            <PageTransition/>
        </Fragment>
    )
}
