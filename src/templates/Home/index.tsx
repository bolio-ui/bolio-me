import React, { useEffect } from 'react'
import { Section, Container, Grid, Input, Button } from '@bolio-ui/core'
import { useForm } from 'react-hook-form'
import { isEmpty } from 'lodash'
import { toLowerCase } from 'src/utils'
import Base from 'src/templates/Base'
import Hero from 'src/components/Hero'
import { ArrowRight } from '@bolio-ui/icons'

function Home({ remaining }) {
  const { register, handleSubmit, formState, errors } = useForm({
    mode: 'onChange'
  })
  // const { ToastsType, addToastWithTimeout } = useToasts()

  useEffect(async () => {
    if (remaining === 0) {
      // addToastWithTimeout(
      //   ToastsType.ERROR,
      //   'Github API rate limit exceeded try again in 1 hour'
      // )
    }
  }, [])

  const { isValid } = formState

  const onSubmit = ({ username }) => {
    console.log('aaaa =>', username)
    if (!username || remaining === 0) return
    const formattedUsername = toLowerCase(username)
    if (window !== undefined)
      window.location = `/portfolio/${formattedUsername}`
  }

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
            <Grid md>
              <form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  width: '100%'
                }}
              >
                <Grid xs={12} md={4}>
                  <Input
                    name="username"
                    width="100%"
                    placeholder="Github username..."
                    font="16px"
                    height={1.5}
                    rounded
                    disabled={remaining === 0}
                    // error={!isEmpty(errors.username)}
                  />
                </Grid>
                <Grid xs={12} md={2}>
                  <Button
                    iconRight={<ArrowRight />}
                    type="secondary-light"
                    width="100%"
                    height={1.3}
                    rounded
                    disabled={!isValid || remaining === 0}
                    onClick={handleSubmit(onSubmit)}
                  >
                    Go!
                  </Button>
                </Grid>
              </form>
            </Grid>
          </Grid.Container>
          <p>Available requests</p>
          <p>
            {remaining}
            /60
          </p>
        </Container>
      </Section>
    </Base>
  )
}

export default Home
