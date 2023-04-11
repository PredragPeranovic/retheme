import { useAppDispatch, } from "~/hooks/redux"
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"
import { changeTheme, initialState as defaultTheme } from "./themeSlice"
import { useTheme } from "./useTheme"

/**
 * Button for top navigation bar for switching theme between light and dark
 */
export function ThemeSwitcher() {
    const dispatch = useAppDispatch()
    const theme = useTheme()

    return (
        <label className="items-center flex-none swap btn btn-sm btn-ghost btn-circle" title="Change theme">
            <input type="checkbox"
                checked={theme !== defaultTheme}
                onChange={() => dispatch(changeTheme())}
            />
            <SunIcon className="w-5 h-5 stroke-current md:w-6 md:h-6 swap-on" />
            <MoonIcon className="w-5 h-5 stroke-current md:w-6 md:h-6 swap-off" />
        </label>
    )
}
