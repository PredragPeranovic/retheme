import type { PayloadAction} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit"

export const COOKIE_NAME = "theme"

export const ThemeStates = ["light", "dark"]

export type ThemeState = typeof ThemeStates[0] | typeof ThemeStates[1]

export const initialState: ThemeState = "light"

export const themeSlice = createSlice({
    name: "theme",
    initialState: initialState as ThemeState,
    reducers: {
        changeTheme: (state) => {
            const newTheme = state === "light" ? "dark" : "light"
            setThemeCookie(newTheme)
            return newTheme
        },
        setTheme: (state, action:PayloadAction<ThemeState>) => {
            const newTheme = action.payload
            if (newTheme !== 'dark' && newTheme !== 'light') {
                return state
            }
            setThemeCookie(newTheme)
            return newTheme
        }
    }
})

export const { changeTheme, setTheme } = themeSlice.actions
export default themeSlice.reducer

/** Saves current theme in plain cookie */
function setThemeCookie(theme:ThemeState){
    if (typeof window === "object") {
        document.cookie = `${COOKIE_NAME}=${theme}; samesite=lax; max-age=${60*60*24*365}`
    }
}
