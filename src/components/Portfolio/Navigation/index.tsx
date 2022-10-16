/* eslint-disable react/display-name */
import dynamic from 'next/dynamic'
import Loading from './loading'

const PortfolioNavigation = dynamic(import('./navigation'), {
  ssr: false,
  loading: () => <Loading />
})

export default PortfolioNavigation
