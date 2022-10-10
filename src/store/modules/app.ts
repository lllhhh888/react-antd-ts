import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AppState {
  collapsed: boolean
}

const initialState: AppState = {
  collapsed: false
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    test (state, action: PayloadAction<boolean>) {
      state.collapsed = action.payload
    }
  }
})

export const { test } = appSlice.actions

export default appSlice.reducer
