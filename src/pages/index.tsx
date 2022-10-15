import { GetStaticProps } from 'next'
import { IS_PORTFOLIO } from 'src/lib/constants'
import buildUser, { getIsGithubRateLimited } from 'src/lib/userBuilder'
import { isEnabledUser } from 'src/utils/userMapping'

import Home from 'src/templates/Home'
import Portfolio from 'src/templates/Portfolio'
import UserNotFound from 'src/templates/UserNotFound'

export default function Index({ user, remaining }) {
  if (user) {
    if (!isEnabledUser(user)) {
      return <UserNotFound username={user?.username} />
    }
    return <Portfolio user={user} />
  }

  return <Home remaining={remaining} />
}

export const getStaticProps: GetStaticProps = async () => {
  const username = process.env.NEXT_PUBLIC_USERNAME

  if (IS_PORTFOLIO) {
    const params = { username }
    const user = await buildUser(params)
    return {
      props: {
        user
      }
    }
  }
  try {
    const { resources } = await getIsGithubRateLimited(true)
    const { remaining } = resources.core
    return {
      props: {
        user: null,
        remaining
      }
    }
  } catch (error) {
    console.error(error)
    return {
      props: {
        user: null,
        remaining: 0
      }
    }
  }
}
