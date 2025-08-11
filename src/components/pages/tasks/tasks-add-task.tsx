import {Fragment} from "react";
import {Button} from "../../ui/button.tsx";
import {Icons} from "../../ui/icons.tsx";

interface Props {
    refetch: () => void;
}

export function TasksAddTask({refetch}: Props) {
    return (
        <Fragment>
            <Button className={'text-2xl flex-center'} variant={'link'}>
                <Icons className={'text-2xl'} name={'plus'}/>
                <span>
                    Add Task
                </span>
            </Button>
            
        </Fragment>
    )
}