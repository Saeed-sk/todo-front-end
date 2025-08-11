import {useSelector} from "react-redux";
import type {RootState} from "../../../store/store.ts";
import {Skeleton} from "../../ui/skeleton.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "../../ui/avatar.tsx";
import {Button} from "../../ui/button.tsx";
import {Icons} from "../../ui/icons.tsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger
} from "../../ui/dropdown-menu.tsx";
import {useState} from "react";
import {Link} from "react-router";
import {AuthLogout} from "../../pages/auth/auth-logout.tsx";
import {cn} from "../../../lib/utils.ts";

export function SidebarHeader() {
    const user = useSelector((state: RootState) => state.auth.user)
    const [openDropdown, setOpenDropdown] = useState(false)
    if (user == null || !user) {
        return (
            <div className={'w-full h-full flex-center gap-2 justify-start'}>
                <Skeleton className={'h-12 w-12 rounded-full shrink-0'}/>
                <div className={'flex flex-col w-full gap-2'}>
                    <Skeleton className={'h-5 w-1/2 rounded-full '}/>
                    <Skeleton className={'h-5 w-full rounded-full '}/>
                </div>
            </div>
        )
    }
    return (
        <div className={'w-full h-full flex-center gap-2 justify-start'}>
            <Avatar className={'w-12 h-12 dark:text-gray-600'}>
                {user?.avatar && <AvatarImage src={user.avatar}/>}
                <AvatarFallback> {user?.name?.split('').map((text, index) => index <= 1 && text)}</AvatarFallback>
            </Avatar>
            <div className={'text-sm font-medium text-gray-900 dark:text-gray-200'}>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
            <div className={'flex-grow !justify-self-end text-end'}>
                <Button variant={'ghost'} onClick={() => setOpenDropdown(!openDropdown)}>
                    <Icons className={cn(openDropdown ? 'rotate-0' : 'rotate-90')} name={'next'}/>
                </Button>
            </div>
            <DropdownMenu open={openDropdown} onOpenChange={() => setOpenDropdown(!openDropdown)}>
                <DropdownMenuTrigger></DropdownMenuTrigger>
                <DropdownMenuContent className={'w-full'}>
                    <DropdownMenuLabel className={'select-none'}>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator/>

                    <Link to={'/profile'}>
                        <DropdownMenuItem>
                            Profile
                        </DropdownMenuItem>
                    </Link>

                    <Link to={'/password'}>
                        <DropdownMenuItem>
                            Password
                        </DropdownMenuItem>
                    </Link>
                    <AuthLogout className={'text-red-500'}>
                        <DropdownMenuItem className={'text-red-500'}>
                            Logout
                        </DropdownMenuItem>
                    </AuthLogout>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}