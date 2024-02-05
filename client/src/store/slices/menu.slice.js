import { createSlice } from '@reduxjs/toolkit'

export const menuSlice = createSlice({
	name: 'menu',
    initialState: true,
    reducers: {
        downMenu : (state) => {
            return !state
        }
    }
})

export const { downMenu } = menuSlice.actions

export default menuSlice.reducer