import { isEmpty, get } from 'lodash'
import { GITHUB_README_URL } from 'src/lib/constants'

export const isEnabledUser = (user) => {
  if (isEmpty(user)) return false
  if (!user.github) {
    return false
  }
  return true
}

export const getGithubReadmeURL = (
  username,
  branch = 'main',
  fileName = 'README.md'
) => {
  return `${GITHUB_README_URL}${username}/${username}/${branch}/${fileName}`
}

export const getAvatar = (user) => {
  if (!user) return ''
  return get(
    user,
    'avatar',
    get(
      user,
      'github.avatar_url',
      get(user, get(user, 'devto.profile_image', '/default-avatar.png'))
    )
  )
}
