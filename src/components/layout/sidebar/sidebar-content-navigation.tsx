import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {cn} from "../../../lib/utils.ts";
import {changeSidebar} from "../../../store/slices/sidebar-slice.ts";
import {Icons} from "../../ui/icons.tsx";
import {textSlice} from "../../../helpers/text-slice.ts";

interface Props {
    project: {
        id?: number;
        title: string;
        file_name: string | null;
        file_type: string | null;
        tasks_count?: number;
    }
    className?: string;
    icon?: string;
}

export function SidebarContentNavigation({project, icon, className}: Props) {
    const {selected_id, selected_text} = useSelector((state: RootState) => state.sidebar)
    const selected_item = selected_text + '-' + selected_id;
    const dispatch = useDispatch<AppDispatch>();
    const selected_list = String(project.title + '-' + project?.id);
    // const filePath = String(import.meta.env.VITE_API_URL + project.file_name)
    const filePath = String(project.file_name)
    if (project.title === 'My Day') icon = 'light'
    else if (project.title === 'Planned') icon = 'calendar'
        return (
            <div
                className={cn('px-3 py-2 select-none mx-4 cursor-pointer rounded-sm transition-colors flex-center justify-start gap-2',
                    'text-foreground font-medium',
                    (selected_list == selected_item ? 'bg-background/90' : ''),
                    className
                )}
                onClick={() => dispatch(changeSidebar({
                    selected_id: String(project?.id ?? 0),
                    selected_text: project.title
                }))}>
                {project?.file_type === 'image' ? (
                    <img src={filePath} alt={`project ${project?.id ?? 0} image`}/>
                ) : project?.file_type === 'color' ? (
                    <span className={'block !h-5 !w-5 aspect-square rounded-full shadow-sm shadow-gray-400'}
                          style={{backgroundColor: project?.file_name ?? 'white'}}/>
                ) : icon ? (
                    <Icons name={icon} className={'text-xl'}/>
                ) : (
                    <Icons name={'task'} className={'text-xl'}/>
                )}
                <span className={' flex-1'}>
                {textSlice(project.title, 5)}
            </span>
                <span className={'bg-gray-300 dark:bg-gray-700 text-sm rounded-sm px-2 py-1 '}>
                {project?.tasks_count ?? 0}
            </span>
            </div>
        )
}