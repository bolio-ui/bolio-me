import { useEffect } from 'react'
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

  const userData = user

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
  }, [])

  return (
    <Section>
      <PortfolioNavigation user={userData} />
      {userData && <PortfolioHero user={userData} />}
      {userData?.github?.readme && <PortfolioAbout user={userData} />}
      {userData?.github?.repos && <PortfolioRepositories user={userData} />}
      {userData && <PortfolioFooter user={userData} />}
    </Section>
  )
}

Portfolio.propTypes = {
  user: PropTypes.object,
  isPreview: PropTypes.bool
}

export default Portfolio
