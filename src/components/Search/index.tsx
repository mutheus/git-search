import { useState, useContext } from 'react'
import Image from 'next/image'
import { ProfileContext } from '../../contexts/ProfileContext'

import styles from './styles.module.scss'

export function Search() {
  const [value, setValue] = useState()
  const { handleEnterClick } = useContext(ProfileContext);
  
  function handleTypeChange(e) {
    setValue(e.target.value)
  }
  
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
      
      <input
        className={styles.search}
        onChange={handleTypeChange}
        onKeyUp={(e) => handleEnterClick(e)}
        value={value}
        type="search"
        placeholder="e.g. mutheus"
      />
    </header>
  )
}