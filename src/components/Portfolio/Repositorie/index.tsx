import React, { useState } from 'react'
import { get } from 'lodash'
import {
  useTheme,
  Button,
  Text,
  Container,
  Row,
  Grid,
  Section,
  Card,
  Spacer,
  Link
} from '@bolio-ui/core'
import * as Icons from '@bolio-ui/icons'

interface Props {
  user
}

export type PortfolioRepositorieProps = Props

function PortfolioRepositorie({ user }: PortfolioRepositorieProps) {
  const theme = useTheme()

  const [userRepos] = useState(get(user, 'github.repos'))

  return (
    <Section py={6}>
      <Container>
        <Grid.Container>
          <Text h1 type="secondary">
            My repositories
          </Text>
        </Grid.Container>
      </Container>
      <Container>
        <Grid.Container gap={2} justify="center">
          {userRepos &&
            userRepos.slice(0, 6).map((repo, index) => {
              const {
                id,
                name,
                stargazers_count,
                html_url,
                forks_count,
                language
              } = repo
              return (
                <>
                  <Grid
                    xs={12}
                    sm={6}
                    md={4}
                    justify="center"
                    index={index}
                    id={id}
                  >
                    <Card
                      style={{
                        background: theme.palette.accents_2
                      }}
                      width="100%"
                      shadow
                    >
                      <Row align="middle" justify="space-between">
                        <Link href={html_url} target="_blank">
                          <Text h4 my={0}>
                            {name}
                          </Text>
                        </Link>
                        <Link href={html_url} target="_blank">
                          <Button
                            icon={
                              <Icons.Github stroke={theme.palette.foreground} />
                            }
                            auto
                            style={{
                              background: theme.palette.accents_3
                            }}
                          />
                        </Link>
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
                </>
              )
            })}
        </Grid.Container>
      </Container>
    </Section>
  )
}

export default PortfolioRepositorie
