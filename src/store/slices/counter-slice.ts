import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

interface CounterState {
    value: number
}

interface CounterPayload {
    type: 'NEW' | 'DECREMENT' | 'INCREMENT'
    value?: number
}

const initialState: CounterState = {
    value: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changeCounter: (state, action: PayloadAction<CounterPayload>) => {
            const { type, value } = action.payload
            if (type === 'NEW') {
                state.value = Number(value)
            } else if (type === 'DECREMENT') {
                state.value = state.value -1
            } else if (type === 'INCREMENT') {
                state.value = state.value + 1
            }
        }
    },
})

export const {changeCounter} = counterSlice.actions
export default counterSlice.reducer
