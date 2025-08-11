import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface SidebarPayload {
    selected_text: string
    selected_id: string
}

interface SidebarState {
    selected_text: string | null
    selected_id: string | null
}

// Helper function to safely get and parse the selected value
const getStoredSelected = () => {
    const stored = localStorage.getItem("sidebar-selected");
    if (!stored) return {id: 'my-day', text: 'My Day'};
    try {
        return JSON.parse(stored);
    } catch {
        return {id: 'my-day', text: 'My Day'};
    }
};

const storedSelected = getStoredSelected();

const initialState: SidebarState = {
    selected_id: storedSelected.id,
    selected_text: storedSelected.text
}

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        changeSidebar(state, action: PayloadAction<SidebarPayload>) {
            state.selected_id = action.payload.selected_id;
            state.selected_text = action.payload.selected_text;
            localStorage.setItem("sidebar-selected", JSON.stringify({
                id: action.payload.selected_id,
                text: action.payload.selected_text
            }));
        }
    }
})

export const {changeSidebar} = sidebarSlice.actions;
export default sidebarSlice.reducer;