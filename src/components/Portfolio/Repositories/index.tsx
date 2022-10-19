import React, { useState } from 'react'
import { get } from 'lodash'
import {
  useTheme,
  Button,
  Text,
  Container,
  Row,
  Col,
  Grid,
  Section,
  Card,
  Spacer,
  Link,
  Tag
} from '@bolio-ui/core'
import * as Icons from '@bolio-ui/icons'

interface Props {
  user
}

export type PortfolioRepositoriesProps = Props

function PortfolioRepositorie({ user }: PortfolioRepositoriesProps) {
  const theme = useTheme()

  const [userRepos] = useState(get(user, 'github.repos'))

  return (
    <Section py={6} id="repositories">
      <Container style={{ marginBottom: '15px' }}>
        <Grid.Container gap={2}>
          <Text h2 type="secondary">
            My repositories
          </Text>
        </Grid.Container>
      </Container>
      <Container>
        <Grid.Container gap={2} justify="flex-start" key={0}>
          {userRepos &&
            userRepos.slice(0, 6).map((repo, index) => {
              const {
                id,
                name,
                stargazers_count,
                html_url,
                forks_count,
                language,
                visibility
              } = repo
              return (
                <Grid
                  xs={12}
                  sm={6}
                  md={4}
                  justify="center"
                  id={id}
                  key={index}
                >
                  <Card
                    style={{
                      background: theme.palette.accents_2
                    }}
                    width="100%"
                  >
                    <Row align="middle" justify="space-between">
                      <Col span={10}>
                        <Link href={html_url} target="_blank">
                          <Text h4 my={0}>
                            {name}
                          </Text>
                        </Link>
                        <Spacer h={0} />
                        <Tag
                          style={{
                            background: theme.palette.accents_3,
                            border: 'none'
                          }}
                          scale={0.5}
                        >
                          {visibility}
                        </Tag>
                      </Col>
                      <Col span={2}>
                        <Link href={html_url} target="_blank">
                          <Button
                            icon={
                              <Icons.Github stroke={theme.palette.foreground} />
                            }
                            style={{
                              background: theme.palette.accents_3
                            }}
                            auto
                            rounded
                          />
                        </Link>
                      </Col>
                    </Row>
                    <Spacer h={2} />
                    <Row justify="space-between">
                      <Text i my={0} font="12px">
                        {stargazers_count > 0 ? (
                          <>
                            <Icons.Star fontSize={12} /> {stargazers_count}
                          </>
                        ) : null}
                      </Text>
                      <Text i my={0} font="12px">
                        {forks_count > 0 ? forks_count : null}
                      </Text>
                      <Text i my={0} font="12px">
                        {language}
                      </Text>
                    </Row>
                  </Card>
                </Grid>
              )
            })}
        </Grid.Container>
      </Container>
      <Container>
        <Grid.Container gap={2} justify="center">
          <Grid mt={2}>
            <Link href={user?.github.html_url} target="_blank">
              <Button style={{ textTransform: 'none' }} auto rounded>
                Show more
              </Button>
            </Link>
          </Grid>
        </Grid.Container>
      </Container>
    </Section>
  )
}

export default PortfolioRepositorie
