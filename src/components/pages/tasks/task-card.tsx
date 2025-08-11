interface Props {
    task: any
}

export function TaskCard({task}: Props) {
    return (
        <div className={'task-card'}>
            <h5>{task.title}</h5>
        </div>
    )
}