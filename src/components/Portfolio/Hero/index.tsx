import React from 'react'
import { getAvatar } from 'src/utils/userMapping'
import { Text, Container, Grid, Avatar, Section } from '@bolio-ui/core'

interface Props {
  user
}

export type PortfolioHeroProps = Props

function PortfolioHero({ user }: PortfolioHeroProps) {
  console.log('TESTETSTE =====>', user)

  return (
    <Section py={6}>
      <Container>
        <Grid.Container gap={2}>
          <Grid xs={12} md={6}>
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
          </Grid>
        </Grid.Container>
      </Container>
    </Section>
  )
}

export default PortfolioHero
