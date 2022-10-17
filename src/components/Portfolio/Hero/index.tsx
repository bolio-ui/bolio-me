import React from 'react'
import { getAvatar } from 'src/utils/userMapping'
import {
  Text,
  Container,
  Grid,
  Avatar,
  Section,
  Link,
  Button
} from '@bolio-ui/core'
import { IconGitHub, IconDevto } from 'src/components/Icons'

interface Props {
  user
}

export type PortfolioHeroProps = Props

function PortfolioHero({ user }: PortfolioHeroProps) {
  console.log('user =====>', user)

  return (
    <Section py={4}>
      <Container>
        <Grid.Container gap={2}>
          <Grid
            xs={12}
            md={6}
            justify="center"
            alignItems="center"
            alignContent="center"
          >
            <Avatar src={getAvatar(user)} height={10} width={10} />
          </Grid>
          <Grid xs={12} md={6} direction="column" justify="center">
            <Text i type="secondary" my={0}>
              Welcome, I&apos;m
            </Text>
            <Text h1 my={0}>
              {user?.github?.name}
            </Text>
            <Text>{user?.github?.bio}</Text>
            {user?.github?.email && (
              <a href={`mailto:${user?.github?.email}`}>Get In Touch</a>
            )}
            <Grid.Container gap={2}>
              {user?.github && (
                <Grid direction="column" justify="center">
                  <Link
                    href={`https://github.com/${user?.github?.login}`}
                    target="_blank"
                  >
                    <Button
                      icon={<IconGitHub />}
                      style={{ textTransform: 'none' }}
                      auto
                      rounded
                    >
                      Github
                    </Button>
                  </Link>
                </Grid>
              )}
              {user?.devto && (
                <Grid>
                  <Link
                    href={`https://dev.to/${user?.devto?.username}`}
                    target="_blank"
                  >
                    <Button
                      icon={<IconDevto />}
                      style={{ textTransform: 'none' }}
                      auto
                      rounded
                    >
                      Dev.to
                    </Button>
                  </Link>
                </Grid>
              )}
            </Grid.Container>
          </Grid>
        </Grid.Container>
      </Container>
    </Section>
  )
}

export default PortfolioHero
