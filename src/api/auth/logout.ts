import {api} from "../../lib/axios.ts";

export async function logoutApi(token: string): Promise<void> {
    return api.post('/api/logout', {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}