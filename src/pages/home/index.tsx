import {ProtectedRoute} from "../../components/pages/auth/protected-routes.tsx";
import {SidebarMain} from "../../components/layout/sidebar/sidebar-main.tsx";
import {useFetch} from "../../hooks/use-fetch.ts";
import {Fragment, useEffect, useMemo, useState} from "react";
import {Skeleton} from "../../components/ui/skeleton.tsx";
import {SidebarContentNavigation} from "../../components/layout/sidebar/sidebar-content-navigation.tsx";
import type {ProjectType} from "../../types/project.ts";
import {AuthLogout} from "../../components/pages/auth/auth-logout.tsx";
import {Icons} from "../../components/ui/icons.tsx";
import {isValidArray} from "../../helpers/array-vlidation.ts";
import {Button} from "../../components/ui/button.tsx";
import {TasksMain} from "../../components/pages/tasks/tasks-main.tsx";


export function HomePage() {
    const token = localStorage.getItem("token")
    const [page, setPage] = useState(1)
    const [projects, setProjects] = useState<ProjectType[]>([])
    const {data, isLoading: loading, mutate} = useFetch(`/api/projects?page=${page}`, token ?? undefined);

    useEffect(() => {
        if (isValidArray(data?.dynamic_projects?.data)) {
            setProjects([...projects, ...data?.dynamic_projects?.data])
        }
    }, [data]);

    function handleReset() {
        setPage(1)
        mutate()
    }

    const static_projects = useMemo(() => {
        return data?.static_projects
    }, [data?.static_projects])


    return (
        <ProtectedRoute>
            <main className={'max-w-1440 relative !h-[calc(100svh-70px)] flex lg:gap-4 mx-auto w-full overflow-clip'}>
                <SidebarMain>
                    <li className={'mb-8'}>
                        <button className={'w-full flex-center justify-start h-8 pl-7 gap-2 cursor-pointer'}>
                            <Icons name={'plus'} className={'text-2xl'}/>
                            <span className={'text-xl font-semibold '}>
                                    Add Task
                                </span>
                        </button>
                    </li>
                    {loading && page === 1 ? (
                        <Fragment>
                            <li className={'w-full h-8 px-3 flex gap-2'}>
                                <Skeleton className={'w-8 h-8 rounded-full shrink-0'}/>
                                <Skeleton className={'w-full h-full'}/>
                            </li>
                            <li className={'w-full h-8 px-3 flex gap-2'}>
                                <Skeleton className={'w-8 h-8 rounded-full shrink-0'}/>
                                <Skeleton className={'w-full h-full'}/>
                            </li>
                            <li className={'w-full h-8 px-3 flex gap-2'}>
                                <Skeleton className={'w-8 h-8 rounded-full shrink-0'}/>
                                <Skeleton className={'w-full h-full'}/>
                            </li>
                            <li className={'w-full h-0.5 bg-gray-200 dark:bg-gray-700 my-1'}/>
                            <li className={'w-full h-8 px-3 flex gap-2'}>
                                <Skeleton className={'w-8 h-8 rounded-full shrink-0'}/>
                                <Skeleton className={'w-full h-full'}/>
                            </li>
                            <li className={'w-full h-8 px-3 flex gap-2'}>
                                <Skeleton className={'w-8 h-8 rounded-full shrink-0'}/>
                                <Skeleton className={'w-full h-full'}/>
                            </li>
                            <li className={'w-full h-8 px-3 flex gap-2'}>
                                <Skeleton className={'w-8 h-8 rounded-full shrink-0'}/>
                                <Skeleton className={'w-full h-full'}/>
                            </li>
                            <li className={'w-full h-8 px-3 flex gap-2'}>
                                <Skeleton className={'w-8 h-8 rounded-full shrink-0'}/>
                                <Skeleton className={'w-full h-full'}/>
                            </li>
                        </Fragment>
                    ) : (
                        <Fragment>
                            {static_projects?.map((static_project: ProjectType, index: number) => (
                                <li key={index}>
                                    <SidebarContentNavigation project={static_project}/>
                                </li>
                            ))}
                            <li className={'w-full h-0.5 bg-gray-200 dark:bg-gray-700 my-1'}/>
                            {projects?.map((dynamic_project: ProjectType, index: number) => (
                                <li key={index}>
                                    <SidebarContentNavigation project={dynamic_project} key={index}/>
                                </li>
                            ))}
                            {loading && page !== 1 && (
                                <Fragment>
                                    <li className={'w-full h-8 px-3 flex gap-2'}>
                                        <Skeleton className={'w-8 h-8 rounded-full shrink-0'}/>
                                        <Skeleton className={'w-full h-full'}/>
                                    </li>
                                    <li className={'w-full h-8 px-3 flex gap-2'}>
                                        <Skeleton className={'w-8 h-8 rounded-full shrink-0'}/>
                                        <Skeleton className={'w-full h-full'}/>
                                    </li>
                                    <li className={'w-full h-8 px-3 flex gap-2'}>
                                        <Skeleton className={'w-8 h-8 rounded-full shrink-0'}/>
                                        <Skeleton className={'w-full h-full'}/>
                                    </li>
                                </Fragment>
                            )}
                            {data?.dynamic_projects?.next_page_url && (
                                <li className={'px-7'}>
                                    <Button variant={'link'} className={'w-full'} onClick={() => {
                                        setPage(page + 1);
                                        handleReset();
                                    }}>
                                        Load more
                                    </Button>
                                </li>
                            )}
                            <li>
                                <AuthLogout className={''}>
                                    log out
                                </AuthLogout>
                            </li>
                        </Fragment>
                    )}
                </SidebarMain>
                <TasksMain/>
            </main>
        </ProtectedRoute>
    )
}
