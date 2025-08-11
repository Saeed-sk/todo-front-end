export type TaskStatusType = "todo" | "in_progress" | "done";

interface StepType {
    id: number;
    task_id: number;
    title: string;
    value: string;
    status: TaskStatusType;
    priority: number;
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
}

export interface TaskType {
    id: number;
    title: string;
    status: TaskStatusType;
    priority: number;
    project_id: number;
    user_id: number;
    timeline_start: string | null;
    timeline_end: string | null;
    importance: number;
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
    steps: StepType[];
    attachments: unknown | null;
}

export type TaskListType = TaskType[];