import { createContext, useContext } from 'react'

export const themes = ['gray', 'light'] as const
export type ThemeType = typeof themes[number]

interface Settings {
  themeType: ThemeType
  switchTheme: (type: ThemeType) => void
}

export const SettingsContext = createContext<Settings>({
  themeType: 'gray',
  switchTheme: () => {}
})

export const useSettings = (): Settings => useContext(SettingsContext)
