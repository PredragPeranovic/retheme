import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import type {
    ShouldRevalidateFunction} from "@remix-run/react";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration
} from "@remix-run/react";

import StyleSheet from "./tailwind.css";
import FontStyles from "@fontsource/roboto/index.css"
import { Provider } from "react-redux";
import { store } from "./features/store";
import { useTheme } from "./features/theme/useTheme";
import { getThemeFromCookie } from "./helpers/cookieSettings.server";
import type { CookieSettings } from "./helpers/cookieSettings.types";


export default function App() {
    return (
        <Provider store={store}>
            <AppHtml />
        </Provider>
    );
}
/**
 * Separeted HTML component to be able to access redux store and obtain theme
 */
function AppHtml() {
    const theme = useTheme()

    return (
        <html lang="en" data-theme={theme}>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body className="box-border m-0 text-base, bg-base-200 [font-kerning:normal] min-h-screen">
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}

/** Returns user settings from cookies, loaded only once */
export async function loader({ request }: LoaderArgs) {
    const theme = getThemeFromCookie(request)

    return {
        theme
    } as CookieSettings
}
export const shouldRevalidate: ShouldRevalidateFunction = () => false

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: StyleSheet },
    { rel: "stylesheet", href: FontStyles },
];
