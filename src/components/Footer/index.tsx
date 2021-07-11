import Image from 'next/image'

import styles from './styles.module.scss'

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <a href="/" className={styles.logo}>
          <Image 
            width={16}
            height={16}
            src="/logo.svg" 
          />
        </a>
        
        <span>&copy; {new Date().getFullYear()} All rights reserved</span>
      </div>
    </footer>
  )
}