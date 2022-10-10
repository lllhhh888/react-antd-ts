import { configureStore } from '@reduxjs/toolkit'
import app from './modules/app'
export const store = configureStore({
  reducer: {
    app
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
