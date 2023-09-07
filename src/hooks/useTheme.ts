import { Theme } from "@/types";
import { useLayoutEffect, useState } from "react";

const LOCALSTORAGE_KEY = 'app-theme'
const DEFAULT_THEME = 'light'

export function useTheme() {
    const startTheme = localStorage.getItem(LOCALSTORAGE_KEY) || DEFAULT_THEME
    const [ theme, setTheme ] = useState<Theme>(startTheme as Theme)

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)

        localStorage.setItem(LOCALSTORAGE_KEY, theme)
    }, [theme])

    return {
        theme,
        setTheme
    }
}