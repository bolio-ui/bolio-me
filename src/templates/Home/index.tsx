import React, { useEffect } from 'react'
import {
  Section,
  Container,
  Grid,
  Input,
  Button,
  Text,
  useToasts
} from '@bolio-ui/core'
import { toLowerCase } from 'src/utils'
import Base from 'src/templates/Base'
import Hero from 'src/components/Hero'
import { ArrowRight } from '@bolio-ui/icons'
import { Formik } from 'formik'
import * as Yup from 'yup'

function Home({ remaining }) {
  const { setToast } = useToasts()

  const initialValues = {
    username: ''
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required field')
      .min(3, 'This field must have at least 3 characters')
  })

  useEffect(() => {
    if (remaining === 0) {
      setToast({
        text: 'Github API rate limit exceeded try again in 1 hour.',
        type: 'secondary',
        delay: 3000
      })
    }
  }, [])

  const handleSubmit = React.useCallback(
    (values, { resetForm }) => {
      const wind: Window = window
      if (!values.username || remaining === 0) return
      const formattedUsername = toLowerCase(values.username)
      if (wind !== undefined) wind.location = `/portfolio/${formattedUsername}`
      resetForm({})
    },
    [remaining]
  )

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
          <Grid.Container gap={2} justify="center">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              enableReinitialize
              validateOnMount
            >
              {({
                values,
                errors,
                touched,
                isValid,
                handleChange,
                handleBlur,
                handleSubmit
              }) => (
                <>
                  <Grid
                    xs={12}
                    md={4}
                    direction="column"
                    justify="center"
                    alignItems="center"
                    alignContent="center"
                  >
                    <Input
                      name="username"
                      placeholder="Github username..."
                      font="16px"
                      height={1.5}
                      width="100%"
                      rounded
                      disabled={remaining === 0}
                      value={values.username}
                      error={touched.username && errors.username}
                      onChange={handleChange('username')}
                      onBlur={handleBlur('username')}
                    />
                    {touched.username && errors.username && (
                      <Text font="12px" mt={0.5} mb={0} type="error">
                        {errors.username}
                      </Text>
                    )}
                  </Grid>
                  <Grid xs={12} md={2}>
                    <Button
                      iconRight={<ArrowRight />}
                      type="secondary-light"
                      width="100%"
                      height={1.3}
                      rounded
                      disabled={!isValid || remaining === 0}
                      onClick={handleSubmit}
                    >
                      Go!
                    </Button>
                  </Grid>
                </>
              )}
            </Formik>
          </Grid.Container>
        </Container>
        <Container>
          <Grid.Container gap={2} justify="center">
            <Text p mt={1}>
              Available requests {remaining}
              /60
            </Text>
          </Grid.Container>
        </Container>
      </Section>
    </Base>
  )
}

export default Home
