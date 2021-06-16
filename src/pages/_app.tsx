import { Search } from '../components/Search'

import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Search />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
