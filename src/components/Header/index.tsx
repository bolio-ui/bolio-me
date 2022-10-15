import React from 'react'
import { Text, Container, Grid, Row, Col, Section } from '@bolio-ui/core'

interface Props {
  user
}

export type HeroProps = Props

function Header({ user }: HeroProps) {
  console.log('TESTETSTE =====>', user)

  return (
    <Section py={5}>
      <Container>
        <Grid.Container justify="center">
          <Row justify="space-around" style={{ textAlign: 'center' }}>
            <Col span={9}>
              <h1>Welcome, I&apos;m</h1>
              <Text h1>{user.github.readme}</Text>
              <Text p font={1.5} mt={0}>
                <p>{user.largeBio}</p>
                {user.email && (
                  <a href={`mailto:${user.email}`} className="email-link">
                    Get In Touch
                  </a>
                )}
              </Text>
            </Col>
          </Row>
        </Grid.Container>
      </Container>
    </Section>
  )
}

export default Header
