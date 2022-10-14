import { isEmpty } from 'lodash'

export const GA_TRACKING_ID = ''
export const IS_PRODUCTION = process.env.NODE_ENV === 'production'
export const IS_GENERATOR = process.env.NEXT_PUBLIC_GENERATOR_MODE === 'true'
export const IS_PORTFOLIO =
  !IS_GENERATOR && !isEmpty(process.env.NEXT_PUBLIC_USERNAME)
export const MAIN_SITE_URL = 'https://me.bolio-ui.com/'
export const GITHUB_URL = 'https://github.com/'
export const GITHUB_API_URL = 'https://api.github.com'
export const GITHUB_USER_URL = `${GITHUB_API_URL}/users/`
export const GITHUB_README_URL = 'https://raw.githubusercontent.com/'
export const DEVTO_USER_URL = 'https://dev.to/api/users/by_username?url='
export const DEVTO_ARTICLES_URL = 'https://dev.to/api/articles?username='
export const HASHNODE_URL = 'https://api.hashnode.com/'
export const AVATAR_GEN_URL = 'https://avatars.dicebear.com/4.5/api/initials/'
export const FAVICON_URL = 'https://icons.duckduckgo.com/ip3/'
