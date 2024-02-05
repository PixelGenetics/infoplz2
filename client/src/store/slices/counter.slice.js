import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
	name: 'counter',
    initialState: true,
    reducers: {
        toggle : (state) => {
            return !state
        }
    }
})

export const { toggle } = counterSlice.actions

export default counterSlice.reducer