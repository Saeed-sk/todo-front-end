export type ProjectFilesType = 'color'| 'image' | null;

export interface ProjectType {
    id: number;
    title: string;
    user_id: number;
    file_type: ProjectFilesType;
    file_name: string | null;
    created_at: string;
    updated_at: string;
    tasks_count: number;
}