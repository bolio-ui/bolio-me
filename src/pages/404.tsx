import React from 'react'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import {
  Section,
  Container,
  Grid,
  Text,
  Row,
  Col,
  Button,
  Link
} from '@bolio-ui/core'
import Base from 'src/templates/Base'

function Home() {
  const router = useRouter()

  return (
    <>
      <NextSeo
        title={
          '404: Page not found | Bolio Me - Just enter your username and see what happens'
        }
        description={
          'Use Bolio Me to create your developer portfolio with just your username.'
        }
        openGraph={{
          url: `${router.pathname}`,
          title:
            '404: Page not found | Bolio Me - Just enter your username and see what happens',
          description:
            'Use Bolio Me to create your developer portfolio with just your username.',
          images: [
            {
              url: '/img/cover.png',
              width: 1200,
              height: 630,
              alt: '404: Not | Bolio Me - Just enter your username and see what happens'
            }
          ]
        }}
      />
      <Base>
        <Section py={4}>
          <Container>
            <Grid.Container justify="center">
              <Row justify="space-around" style={{ textAlign: 'center' }}>
                <Col span={10}>
                  <Text h1 font={6}>
                    Oops!
                  </Text>
                  <Text h2>404 - PAGE NOT FOUND</Text>
                  <Text p font={1.2}>
                    The page you are looking for might have been removed had its
                    name changed or is temporarily unavailable.
                  </Text>
                </Col>
              </Row>
            </Grid.Container>
            <Grid.Container gap={2} justify="center" alignItems="center">
              <Grid>
                <Link href="/">
                  <Button type="secondary" rounded width="100%">
                    Go to home
                  </Button>
                </Link>
              </Grid>
            </Grid.Container>
          </Container>
        </Section>
      </Base>
    </>
  )
}

export default Home
