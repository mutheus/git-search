import { Search } from '../components/Search'
import ProfileContext from '../contexts/ProfileContext'

import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ProfileContext>
      <Search />
      <Component {...pageProps} />
    </ProfileContext>
  )
}

export default MyApp
