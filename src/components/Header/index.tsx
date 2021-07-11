import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.logo}>
            <Image 
              width={36}
              height={36}
              src="/logo.svg"
              alt="git_search logo"
            />
            
            <h1>git_search</h1>
          </a>
        </Link>
      </nav>
    </header>
  )
}