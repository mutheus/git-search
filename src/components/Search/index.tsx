import { useState, useContext } from 'react'
import { ProfileContext } from '../../contexts/ProfileContext'

import styles from './styles.module.scss'

export function Search() {
  const [value, setValue] = useState()
  const { handleEnterClick, isInputDisabled } = useContext(ProfileContext)
  
  function handleTypeChange(e) {
    setValue(e.target.value)
  }
  
  return (
    <div className={styles.container}>
      <input
        className={styles.search}
        onChange={handleTypeChange}
        onKeyUp={(e) => handleEnterClick(e)}
        value={value}
        disabled={isInputDisabled}
        type="search"
        placeholder="e.g. fdaciuk"
        autoCapitalize="none"
      />
    </div>
  )
}