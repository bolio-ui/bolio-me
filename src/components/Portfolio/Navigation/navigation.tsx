import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Container,
  Grid,
  Spacer,
  Button,
  Link,
  Text,
  Tabs,
  useTheme,
  useBodyScroll
} from '@bolio-ui/core'
import { Sun, Moon, Heart, Github, Instagram, Twitter } from '@bolio-ui/icons'
import { useSettings } from 'src/contexts/SettingsContext'

interface Props {
  user
}

export type PortfolioNavigationProps = Props

function PortfolioNavigation({ user }: PortfolioNavigationProps) {
  const theme = useTheme()
  const settings = useSettings()
  const router = useRouter()
  const [expanded, setExpanded] = useState<boolean>(false)
  const [, setBodyHidden] = useBodyScroll(null, { delayReset: 300 })

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const scrollHandler = () =>
      setSticky(document.documentElement.scrollTop > 0)
    document.addEventListener('scroll', scrollHandler)
    return () => document.removeEventListener('scroll', scrollHandler)
  }, [setSticky])

  useEffect(() => {
    setBodyHidden(expanded)
  }, [expanded, setBodyHidden])

  useEffect(() => {
    const handleRouteChange = () => {
      setExpanded(false)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  return (
    <>
      <nav className="menu_wrapper">
        <Container fluid>
          <div className={`${sticky ? 'menu_sticky' : 'menu'}`}>
            <Grid.Container gap={1} justify="center">
              <Grid
                xs={6}
                md={6}
                justify="flex-start"
                alignItems="center"
                alignContent="center"
              >
                <Link href="/">
                  <Text b>{user?.github?.name}</Text>
                </Link>
              </Grid>
              <Grid
                xs={6}
                md={6}
                justify="flex-end"
                alignItems="center"
                alignContent="center"
              >
                <Button
                  w="28px"
                  h="28px"
                  py={0}
                  px={0}
                  aria-label="Toggle Purple mode"
                  className="theme-button"
                  type="abort"
                  onClick={() =>
                    settings.switchTheme(
                      theme.type === 'light' ? 'gray' : 'light'
                    )
                  }
                >
                  {theme.type === 'light' ? (
                    <Moon fontSize={16} color={theme.palette.foreground} />
                  ) : (
                    <Sun fontSize={16} color={theme.palette.foreground} />
                  )}
                </Button>
                <Tabs
                  value={router.asPath}
                  onChange={(route) => router.push(route)}
                  hideDivider
                  hideBorder
                  style={{ marginTop: '10px' }}
                >
                  <Tabs.Item label="About" value="/docs/components/avatar" />
                  <Tabs.Item
                    label="Project"
                    value="/docs/hooks/use-body-scroll"
                  />
                </Tabs>
              </Grid>
            </Grid.Container>
          </div>
        </Container>
      </nav>
      <style jsx>{`
        .menu_wrapper {
          height: 60px;
          position: relative;
          overflow: hidden;
          z-index: 99;
        }
        .menu_sticky {
          z-index: 1;
          position: fixed;
          z-index: 1100;
          top: 0;
          right: 0;
          left: 0;
          box-shadow: ${theme.type === 'dark'
            ? 'rgba(255, 255, 255, 0.1) 0 0 20px 0'
            : 'rgba(0, 0, 0, 0.1) 0 0 20px 0'};
          backdrop-filter: saturate(180%) blur(10px);
          transition: box-shadow 1s ease;
          transition: backdrop-filter 1s ease;
          padding-left: 15px;
          padding-right: 15px;
        }
        .menu_wrapper :global(.theme-button) {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.25rem;
          height: 2.25rem;
          padding: 0;
        }
      `}</style>
    </>
  )
}

export default PortfolioNavigation
