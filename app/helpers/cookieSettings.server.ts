import type { ThemeState } from "../features/theme/themeSlice";
import { COOKIE_NAME as THEME_COOKIE_NAME } from "../features/theme/themeSlice";
import { ThemeStates, initialState as defaultTheme } from "../features/theme/themeSlice"

/**
 * Returns plain value from cookie
 * @param request current request
 * @param name name of the cookie value
 * @returns null or value as string
 */
export function getCookieValue(request: Request, name: string): string | null {
    const cookieHeader = request.headers.get("Cookie")
    if (cookieHeader === null) {
        return null
    }

    const cookies = Object.fromEntries(cookieHeader.split("; ").map(v => v.split(/="?([^"]+)"?/)))
    const value = cookies[name]
    if (value === undefined) {
        return null
    }
    return value as string
}

/**
 * Returns theme from cookie or default theme
 */
export function getThemeFromCookie(request: Request): ThemeState {
    const themeInCookie = getCookieValue(request, THEME_COOKIE_NAME)

    if (themeInCookie && ThemeStates.includes(themeInCookie)) {
        return themeInCookie as ThemeState
    }
    return defaultTheme as ThemeState
}
