import { useState, useEffect } from 'react'
import { GetStaticProps } from 'next'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'
import { Section, Container, Grid, Text, Spinner } from '@bolio-ui/core'
import buildUser from 'src/lib/userBuilder'
import { isEnabledUser } from 'src/utils/userMapping'
import { IS_PORTFOLIO } from 'src/lib/constants'
import Portfolio from 'src/templates/Portfolio'
import Base from 'src/templates/Base'
import UserNotFound from 'src/templates/UserNotFound'

export async function getStaticPaths() {
  return { paths: [], fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (IS_PORTFOLIO) {
    return { notFound: true }
  }
  try {
    const user = await buildUser(params)
    return {
      props: {
        user
      },
      revalidate: 1
    }
  } catch (error) {
    console.error('Error:', error)
    return { notFound: true }
  }
}

const PortfolioPage = ({ router, user }) => {
  const [loaderText, setLoaderText] = useState('Making it happen... 🥷🏼⚡️')

  useEffect(() => {
    if (router.isFallback) {
      setTimeout(() => {
        setLoaderText(
          'Recommend you have the same username on Github and Dev.to... 🥷🏼⚡️'
        )
      }, 1500)
    }
  }, [])

  if (router.isFallback) {
    return (
      <Base>
        <Section py={10}>
          <Container>
            <Grid.Container
              gap={2}
              direction="column"
              justify="center"
              alignItems="center"
              style={{ textAlign: 'center' }}
            >
              <Spinner mb="1rem" scale={2} />
              {!IS_PORTFOLIO && <Text h1>{loaderText}</Text>}
            </Grid.Container>
          </Container>
        </Section>
      </Base>
    )
  }

  if (!router.isFallback && !isEnabledUser(user)) {
    return <UserNotFound username={user?.username} />
  }

  return <Portfolio user={user} />
}

PortfolioPage.propTypes = {
  user: PropTypes.object,
  router: PropTypes.object
}

export default withRouter(PortfolioPage)
