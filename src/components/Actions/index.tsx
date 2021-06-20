import { useContext } from 'react'
import { ProfileContext } from '../../contexts/ProfileContext'

import styles from './styles.module.scss'

export function Actions() {
  const { showFav, setShowFav } = useContext(ProfileContext)
  
  function handleClick() {
    setShowFav(!showFav)
  }
  
  return (
    <div className={styles.actions}>
      <button onClick={handleClick}>See repos</button>
      <button onClick={handleClick}>See favorites</button>
    </div>
  )
}