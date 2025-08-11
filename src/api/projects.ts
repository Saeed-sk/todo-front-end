import {api} from "../lib/axios.ts";

export async function getProjects(token: string) {
    const response = await api.get('/api/projects', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data
}