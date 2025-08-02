import {api} from "../../lib/axios.ts";

export async function loginApi(email: string, password: string) {
    return await api.post('/api/login', {
        email,
        password
    });
}