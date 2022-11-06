import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AppState {
  collapsed: boolean
  menuTabs: Array<{ title: string, path: string }>
  menuActive: string
}

const initialState: AppState = {
  collapsed: false,
  menuTabs: [],
  menuActive: ''
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCollapsed (state, action: PayloadAction<boolean>) {
      state.collapsed = action.payload
    },
    setMenuTab (state, action: PayloadAction<{ title: string, path: string }>) {
      let has = false
      const tab = action.payload
      state.menuTabs.forEach(item => {
        if (item.path === tab.path) {
          item = tab
          has = true
        }
      })
      if (!has) {
        state.menuTabs.push(tab)
      }
    },
    setMenuActive (state, action: PayloadAction<string>) {
      state.menuActive = action.payload
    }
  }
})

export const { setCollapsed, setMenuTab, setMenuActive } = appSlice.actions

export default appSlice.reducer
