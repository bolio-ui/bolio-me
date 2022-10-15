import React from 'react'
import { Section, Container, Grid, Input, Button } from '@bolio-ui/core'
import Base from 'src/templates/Base'
import Hero from 'src/components/Hero'
import { ArrowRight } from '@bolio-ui/icons'

function UserNotFound() {
  return (
    <Base>
      <Hero
        content={{
          title: 'USUARIO NÃO ENCONTRADO',
          description: 'aaaa'
        }}
      />
    </Base>
  )
}

export default UserNotFound
