import { configureStore } from '@reduxjs/toolkit'
import counter from './slices/counter.slice'
import menu from './slices/menu.slice'

export default configureStore({
    reducer: {
        counter: counter,
        menu : menu
	}
})
