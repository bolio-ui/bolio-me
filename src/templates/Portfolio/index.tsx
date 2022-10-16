import { useEffect } from 'react'
import { get } from 'lodash'
import { Section, useToasts } from '@bolio-ui/core'
import { Header } from 'src/components'
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
  }, [setToast, user])

  return (
    <Section>
      {userData && <Header user={userData} />}
      {/* {userData?.hasReadme && <About user={userData} />}
      {userData?.hasPosts && <Blog user={userData} />}
      {userData?.hasRepos && <Projects user={userData} />}
      {(userData.email || userData.isHireable) && <Contact user={userData} />} */}
    </Section>
  )
}

Portfolio.propTypes = {
  user: PropTypes.object,
  isPreview: PropTypes.bool
}

export default Portfolio
