import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "~/hooks/redux"
import type { ThemeState } from "./themeSlice";
import { setTheme } from "./themeSlice"
import { useRouteLoaderData } from "@remix-run/react"
import type { CookieSettings } from "../cookieSettings/types";


/** Hook for getting current theme reagardles if it is client side of Server Side rendering */
export function useTheme() {
    const dispatch = useAppDispatch()
    // get theme from redux state
    const theme = useAppSelector((state) => state.theme)

    // get theme from cookie (usefull when server side rendering)
    const cookieSettings = useRouteLoaderData("root") as CookieSettings
    const cookieTheme = cookieSettings.theme

    const effectiveTheme: ThemeState = (typeof window === "undefined") ? cookieTheme : theme

    useEffect(() => {
        // on update theme in redux from cookie on first load
        if (cookieTheme !== theme) {
            dispatch(setTheme(cookieTheme))
        }
    }, [])

    return effectiveTheme
}
