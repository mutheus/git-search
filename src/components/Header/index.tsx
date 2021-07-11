import Image from 'next/image'

import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <a href="/" className={styles.logo}>
          <Image 
            width={36}
            height={36}
            src="/logo.svg" 
          />
          
          <h1>git_search</h1>
        </a>
      </nav>
    </header>
  )
}