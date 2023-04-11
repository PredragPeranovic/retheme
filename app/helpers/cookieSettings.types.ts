import type { ThemeState } from "../features/theme/themeSlice";
/**
 * Settings saved as plain cookie values used for
 * theming, language and similar settings to be
 * saved across visits to the app
 */
export interface CookieSettings {
    theme: ThemeState
}
