import { librarySlice } from './../features/library/services/states/librarySlice';
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        library: librarySlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch