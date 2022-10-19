import React from 'react'
import ReactMarkdownWithHtml from 'react-markdown/with-html'
import { Text, Container, Grid, Section } from '@bolio-ui/core'

interface Props {
  user
}

export type PortfolioAboutProps = Props

function PortfolioAbout({ user }: PortfolioAboutProps) {
  return (
    <Section id="#about">
      <Container>
        <Grid.Container gap={2}>
          <Text h2 type="secondary">
            About me
          </Text>
        </Grid.Container>
      </Container>
      <Container>
        <Grid.Container gap={2}>
          <Grid justify="center">
            <Text>
              <ReactMarkdownWithHtml unwrapDisallowed allowDangerousHtml>
                {user?.github?.readme}
              </ReactMarkdownWithHtml>
            </Text>
          </Grid>
        </Grid.Container>
      </Container>
    </Section>
  )
}

export default PortfolioAbout
