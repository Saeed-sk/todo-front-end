import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../lib/axios.ts";

export const fetchUser = createAsyncThunk(
    'auth/fetchUser',
    async (token: string) => {
        const response = await api.get('/api/me', {
            headers: {Authorization: `Bearer ${token}`}
        })
        return response.data
    }
)