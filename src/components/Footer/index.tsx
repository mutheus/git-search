import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.scss'

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/">
          <a className={styles.logo}>
            <Image 
              width={16}
              height={16}
              src="/logo.svg" 
              alt="git_search logo"
            />
          </a>
        </Link>
        
        <span>&copy; {new Date().getFullYear()} All rights reserved</span>
      </div>
    </footer>
  )
}