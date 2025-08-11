import {useSelector} from "react-redux";
import type {RootState} from "../../../store/store.ts";
import {useFetch} from "../../../hooks/use-fetch.ts";
import {TasksAddTask} from "./tasks-add-task.tsx";

export function TasksMain() {
    const {selected_id, selected_text} = useSelector((state: RootState) => state.sidebar)
    const token = useSelector((state: RootState) => state.auth.token)
    const {data: tasks, error, isLoading, mutate} = useFetch(`/api/tasks/${selected_id}`, token ?? undefined)

    function refetch() {
        mutate()
    }

    console.log(tasks)
    return (
        <section className={'flex-1 w-full h-full p-10'}>
            <div className={'w-full flex-center justify-between'}>
                <h2 className={'text-2xl font-bold text-gray-800 dark:text-gray-200'}>
                    {selected_text}
                </h2>
                <TasksAddTask refetch={refetch}/>

            </div>
        </section>
    )
}