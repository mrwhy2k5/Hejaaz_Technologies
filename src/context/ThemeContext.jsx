import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        // Check local storage or system preference
        const savedTheme = localStorage.getItem('hejaaz-theme')
        if (savedTheme) return savedTheme

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    })

    useEffect(() => {
        const root = window.document.documentElement
        if (theme === 'dark') {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
        localStorage.setItem('hejaaz-theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    }

    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    const [previousPath, setPreviousPath] = useState(null)

    const updatePath = (newPath) => {
        setPreviousPath(currentPath)
        setCurrentPath(newPath)
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, currentPath, previousPath, updatePath }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) throw new Error('useTheme must be used within a ThemeProvider')
    return context
}
