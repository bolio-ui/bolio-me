import React, { useCallback, useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { BolioUIProvider, CssBaseline } from '@bolio-ui/core'
import {
  SettingsContext,
  themes,
  ThemeType
} from 'src/contexts/SettingsContext'
import Favicon from 'src/components/Favicon'
import SEO from '../../next-seo.config'

import { grayTheme } from 'src/theme'

function App({ Component, pageProps }: AppProps) {
  const [themeType, setThemeType] = useState<ThemeType>('gray')

  useEffect(() => {
    document.documentElement.removeAttribute('style')
    document.body.removeAttribute('style')

    const theme = window.localStorage.getItem('theme') as ThemeType
    if (themes.includes(theme)) setThemeType(theme)
  }, [])

  const switchTheme = useCallback((theme: ThemeType) => {
    setThemeType(theme)
    if (typeof window !== 'undefined' && window.localStorage)
      window.localStorage.setItem('theme', theme)
  }, [])

  return (
    <>
      <Head>
        <title>Bolio Me - Just enter your username and see what happens</title>
        <meta
          name="description"
          content="Use Bolio Me to create your developer portfolio with just your username."
        />
        <Favicon />
      </Head>
      <BolioUIProvider themes={[grayTheme]} themeType={themeType}>
        <SettingsContext.Provider value={{ themeType, switchTheme }}>
          <DefaultSeo {...SEO} />
          <CssBaseline />
          <Component {...pageProps} />
        </SettingsContext.Provider>
      </BolioUIProvider>
    </>
  )
}

export default App
