import {createSlice} from '@reduxjs/toolkit'

interface MenuState {
    open: boolean
}

const initialState: MenuState = {
    open: false,
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.open = !state.open
        }
    },
})

export const {toggleSidebar} = menuSlice.actions
export default menuSlice.reducer
