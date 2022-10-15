import { useState, useEffect } from 'react'
import { GetStaticProps } from 'next'
// import { UserNotFoundView, PortfolioView } from '@views'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'
// import { useChangeRootColor } from 'src/hooks'
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
  const [loaderText, setLoaderText] = useState('Doing the magic 🪄💫 ...')

  useEffect(() => {
    if (router.isFallback) {
      setTimeout(() => {
        setLoaderText(
          'I recommend you have the same username on Github, Hashnode and Dev.to 🪄💫 ...'
        )
      }, 1500)
    }
  }, [router.isFallback])

  if (router.isFallback) {
    return (
      <Base>
        <Section py={10} className="section-portifolio">
          <Container>
            <Grid.Container gap={2} justify="center" alignItems="center">
              <Spinner mb="1rem" />
              {!IS_PORTFOLIO && <Text h1>{loaderText}</Text>}
            </Grid.Container>
          </Container>
        </Section>
      </Base>
    )
  }

  if (!router.isFallback && !isEnabledUser(user)) {
    return <UserNotFound user={user} />
  }

  return <Portfolio user={user} />
}

PortfolioPage.propTypes = {
  user: PropTypes.object,
  router: PropTypes.object
}

export default withRouter(PortfolioPage)
