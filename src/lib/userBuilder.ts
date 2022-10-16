import { cleanAttrs, cleanGithubUrl, areSimilarStrings } from 'src/utils'
import { getGithubReadmeURL } from 'src/utils/userMapping'
import { get, orderBy, isEmpty } from 'lodash'
import {
  GITHUB_API_URL,
  GITHUB_USER_URL,
  DEVTO_USER_URL,
  DEVTO_ARTICLES_URL,
  IS_PORTFOLIO
} from './constants'

const fetchUserReadme = async (username) => {
  const branches = ['main', 'master']
  const names = ['README.md', 'Readme.md', 'readme.md']
  let readmeFound = false
  let githubReadmeData = null
  try {
    for (const branch of branches) {
      for (const fileName of names) {
        if (!readmeFound) {
          const githubReadmeRes = await fetch(
            getGithubReadmeURL(username, branch, fileName)
          )
          githubReadmeData = await githubReadmeRes.text()
          readmeFound = !githubReadmeData.includes('404')
        }
      }
    }
    return githubReadmeData
  } catch (error) {
    console.error(error)
    return null
  }
}

export const getReposData = async (username) => {
  try {
    const response = await fetch(
      `${GITHUB_USER_URL}${username}/repos?per_page=100`
    )
    if (response.status === 404 || response.status === 403) {
      return []
    }
    const repos = await response.json()
    const orderedRepos = orderBy(repos, ['stargazers_count'], ['desc'])
    return orderedRepos
  } catch (error) {
    console.error(error)
    return []
  }
}

export const getIsGithubRateLimited = async (showLimit = false) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/rate_limit`)
    const limit = await response.json()
    if (showLimit) {
      return limit
    }
    if (limit.resources.core.remaining < 1) {
      return true
    }
    return false
  } catch (error) {
    return false
  }
}

const fullfillUser = async ({ username, github = {}, devto = {} }) => {
  const user = {
    username,
    github,
    devto
  }
  if (!github.login) {
    let githubUsername = ''

    if (get(devto, 'github_username')) {
      githubUsername = get(devto, 'github_username')
    }

    user.github.login = githubUsername
  }

  if (get(user, 'github.login')) {
    const githubUserRes = await fetch(`${GITHUB_USER_URL}${user.github.login}`)
    const githubUserData = await githubUserRes.json()
    const githubReadmeData = await fetchUserReadme(user.github.login)
    const githubReposData = await getReposData(user.github.login)
    const githubLimited = await getIsGithubRateLimited()
    user.github = cleanAttrs(githubUserData)
    user.github.limited = githubLimited
    user.github.readme = githubReadmeData
    user.github.repos = githubReposData
  }

  return user
}

const buildUser = async (params) => {
  let user = {}
  const { username } = params

  const githubUserResponse = await fetch(`${GITHUB_USER_URL}${username}`)
  const githubUserRes = await githubUserResponse.json()
  const devtoUserResponse = await fetch(`${DEVTO_USER_URL}${username}`)
  const devtoUserRes = await devtoUserResponse.json()
  const githubUser = cleanAttrs(githubUserRes)

  const devtoUser = cleanAttrs(devtoUserRes)
  user = await fullfillUser({
    username: username,
    github: githubUser,
    devto: devtoUser
  })

  return user
}

export default buildUser
