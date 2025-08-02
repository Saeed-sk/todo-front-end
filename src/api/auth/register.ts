import {api} from "../../lib/axios.ts";

export async function registerApi(name: string, email: string, password: string, password_confirmation: string){
    return await api.post('/api/register', {
        name,
        email,
        password,
        password_confirmation,
    });
}