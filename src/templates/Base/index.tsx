import React from 'react'
import { Page } from '@bolio-ui/core'
import Footer from 'src/components/Footer'
import Navigation from 'src/components/Navigation'

export type BaseTemplateProps = {
  children: React.ReactNode
}

function Base({ children }: BaseTemplateProps) {
  return (
    <Page>
      <Page.Header>
        <Navigation />
      </Page.Header>
      <Page.Content>{children}</Page.Content>
      <Page.Footer>
        <Footer />
      </Page.Footer>
    </Page>
  )
}

export default Base
