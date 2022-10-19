import React from 'react'
import { Section, Text, Container, Grid } from '@bolio-ui/core'

interface Props {
  user
}

export type PortfolioFooterProps = Props

function PortfolioFooter({ user }: PortfolioFooterProps) {
  return (
    <Section padding={2}>
      <Container>
        <Grid.Container
          justify="center"
          alignItems="center"
          alignContent="center"
          style={{ textAlign: 'center' }}
        >
          <Grid>
            <Text h6 my={0}>
              © {new Date().getFullYear()} {user?.github?.name}
            </Text>
          </Grid>
        </Grid.Container>
      </Container>
    </Section>
  )
}

export default PortfolioFooter
