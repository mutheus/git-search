import { useContext } from 'react'
import { ProfileContext } from '../../contexts/ProfileContext'

import styles from './styles.module.scss'

export function Actions() {
  const { showFav, handleActionClick } = useContext(ProfileContext)
  
  return (
    <div className={styles.actions}>
      <button className={`${!showFav ? styles.active : ''}`} onClick={(e) => handleActionClick(e)}>See repos</button>
      <button className={`${showFav ? styles.active : ''}`} onClick={(e) => handleActionClick(e)}>See starred</button>
    </div>
  )
}