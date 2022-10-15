import { useEffect } from 'react'
import { Section } from '@bolio-ui/core'
import PropTypes from 'prop-types'
import { useUserDataContext } from 'src/contexts/UserDataContext'
import { useUIContext } from 'src/contexts/UiContext'
import { IS_PORTFOLIO, IS_GENERATOR } from 'src/lib/constants'
import { useToasts } from 'src/contexts/ToastsContext'
import { get } from 'lodash'

import Header from 'src/components/Header'

const Portfolio = ({ user, isPreview = false }) => {
  // const { user: userContext, updateValue } = useUserDataContext()
  // const { ToastsType, addToastWithTimeout } = useToasts()
  // const { restartValues, updateValue: updateUI } = useUIContext()
  const isEditable = !(IS_PORTFOLIO || isPreview)
  const userData = user

  useEffect(() => {
    // restartValues()
    // updateUI({
    //   isEditable,
    //   showDeployButton: IS_GENERATOR,
    //   showCustomizer: isEditable
    // })
  }, [isEditable])

  useEffect(() => {
    if (user) {
      // updateValue(user)
      // if (get(user, 'github.limited') === true) {
      //   addToastWithTimeout(
      //     ToastsType.ERROR,
      //     'Github API rate limit exceeded try again in 1 hour'
      //   )
      // }
    }
  }, [user])

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
