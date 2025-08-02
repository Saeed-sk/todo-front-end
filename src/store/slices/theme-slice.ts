import {createSlice, type PayloadAction,} from '@reduxjs/toolkit'

export type ThemeMode = 'light' | 'dark'

interface ThemeState {
    mode: ThemeMode
}

const localTheme = (localStorage.getItem('theme') as ThemeMode) || 'light'

const initialState: ThemeState = {
    mode: localTheme,
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light'
            localStorage.setItem('theme', state.mode)
        },
        setTheme: (state, action: PayloadAction<ThemeMode>) => {
            state.mode = action.payload
            localStorage.setItem('theme', action.payload)
        }
    },
})

export const {toggleTheme, setTheme} = themeSlice.actions
export default themeSlice.reducer
