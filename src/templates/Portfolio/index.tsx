import React, { useEffect } from 'react'
import { get } from 'lodash'
import { Section, useToasts } from '@bolio-ui/core'
import {
  PortfolioNavigation,
  PortfolioHero,
  PortfolioAbout,
  PortfolioRepositories,
  PortfolioFooter
} from 'src/components'
import PropTypes from 'prop-types'

const Portfolio = ({ user }) => {
  const { setToast } = useToasts()

  useEffect(() => {
    if (user) {
      if (get(user, 'github.limited') === true) {
        setToast({
          text: 'Github API rate limit exceeded try again in 1 hour.',
          type: 'secondary',
          delay: 2000
        })
      }
    }
  })

  return (
    <Section>
      <PortfolioNavigation user={user} />
      {user && <PortfolioHero user={user} />}
      {user?.github?.readme && !user?.github?.readme.includes('404') && (
        <PortfolioAbout user={user} />
      )}
      {user?.github?.repos && user?.github?.repos?.length > 0 && (
        <PortfolioRepositories user={user} />
      )}
      {user && <PortfolioFooter user={user} />}
    </Section>
  )
}

Portfolio.propTypes = {
  user: PropTypes.object,
  isPreview: PropTypes.bool
}

export default Portfolio
