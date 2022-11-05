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
    setCollapsed (state, action: PayloadAction<boolean>) {
      state.collapsed = action.payload
    }
  }
})

export const { setCollapsed } = appSlice.actions

export default appSlice.reducer
