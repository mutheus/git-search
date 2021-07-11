import { Header } from '../components/Header'
import { Search } from '../components/Search'
import { Footer } from '../components/Footer'
import ProfileContext from '../contexts/ProfileContext'

import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div className="sticky-footer">
      <ProfileContext>
        <Header />
        <Search />
        <Component {...pageProps} />
        <Footer />
      </ProfileContext>
    </div>
  )
}

export default MyApp
