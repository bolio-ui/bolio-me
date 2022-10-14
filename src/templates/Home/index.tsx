import React from 'react'
import { Section, Container, Grid, Input, Button } from '@bolio-ui/core'
import Base from 'src/templates/Base'
import Hero from 'src/components/Hero'
import { ArrowRight } from '@bolio-ui/icons'

function Home() {
  return (
    <Base>
      <Hero
        content={{
          title: 'Bolio Me',
          description: 'Just enter your username and see what happens. 🥷🏼'
        }}
      />
      <Section>
        <Container>
          <Grid.Container gap={2} justify="center" alignItems="center">
            <Grid xs={12} md={4}>
              <Input
                width="100%"
                placeholder="Github username..."
                font="16px"
                height={1.5}
                rounded
              />
            </Grid>
            <Grid xs={12} md={2}>
              <Button
                iconRight={<ArrowRight />}
                type="secondary-light"
                width="100%"
                height={1.3}
                rounded
              >
                Go!
              </Button>
            </Grid>
          </Grid.Container>
        </Container>
      </Section>
    </Base>
  )
}

export default Home
