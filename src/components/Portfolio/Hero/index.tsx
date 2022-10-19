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
  return (
    <Section py={6} id="hero">
      <Container>
        <Grid.Container gap={2}>
          <Grid
            xs={12}
            md={6}
            justify="center"
            alignItems="center"
            alignContent="center"
          >
            <div className="border-gradient">
              <Avatar src={getAvatar(user)} height={10} width={10} />
            </div>
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
              {user?.github?.login && (
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
              {user?.devto?.username && (
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
      <style jsx>{`
        .border-gradient {
          background: linear-gradient(#c25fff, #7828c9) padding-box,
            linear-gradient(to right, #c25fff, #7828c9) border-box;
          border-radius: 50em;
          border: 6px solid transparent;
        }
      `}</style>
    </Section>
  )
}

export default PortfolioHero
