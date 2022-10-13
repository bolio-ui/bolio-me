import React from 'react'
import { Section, Container, Grid, Input } from '@bolio-ui/core'
import Base from 'src/templates/Base'
import Hero from 'src/components/Hero'
import * as Icons from '@bolio-ui/icons'

function Home() {
  return (
    <Base>
      <Hero
        content={{
          title: 'Bolio Me',
          description: 'Just enter your username and see what happens. 🥷🏼'
        }}
      />
      <Section pb={4}>
        <Container>
          <Grid.Container justify="center">
            <Grid xs={12} md={6}>
              <Input
                width="100%"
                icon={<Icons.Github />}
                placeholder="Github username..."
                mb={2}
                height={1.5}
                rounded
              />
            </Grid>
          </Grid.Container>
        </Container>
      </Section>
    </Base>
  )
}

export default Home
