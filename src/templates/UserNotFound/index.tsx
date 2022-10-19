import React from 'react'
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
import { ArrowLeft } from '@bolio-ui/icons'
import { IconGitHub, IconDevto } from 'src/components/Icons'

function UserNotFound({ username }) {
  return (
    <Base>
      <Section py={4}>
        <Container>
          <Grid.Container justify="center">
            <Row justify="space-around" style={{ textAlign: 'center' }}>
              <Col span={8}>
                <Text h1 font={4}>
                  Oops!
                </Text>
                <Text h3>
                  Sorry there is not enough information for the user &nbsp;
                  <Text i>{`"${username}"`} </Text>
                </Text>
                <Text p font={1.2}>
                  You can start as follows:
                </Text>
              </Col>
            </Row>
          </Grid.Container>
          <Grid.Container gap={2} justify="center">
            <Grid>
              <Link href="https://github.com/" target="_blank">
                <Button
                  icon={<IconGitHub />}
                  style={{ textTransform: 'none' }}
                  auto
                  rounded
                >
                  Create an account on Github
                </Button>
              </Link>
            </Grid>
            <Grid>
              <Link href="https://dev.to/" target="_blank">
                <Button
                  icon={<IconDevto />}
                  style={{ textTransform: 'none' }}
                  auto
                  rounded
                >
                  Start a blog on Dev.to
                </Button>
              </Link>
            </Grid>
          </Grid.Container>
          <Grid.Container gap={2} justify="center">
            <Grid>
              <Link href="/">
                <Button icon={<ArrowLeft />} type="abort" rounded auto>
                  Go to home
                </Button>
              </Link>
            </Grid>
          </Grid.Container>
        </Container>
      </Section>
    </Base>
  )
}

export default UserNotFound
