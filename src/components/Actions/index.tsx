import { useContext } from 'react'
import { ProfileContext } from '../../contexts/ProfileContext'

import styles from './styles.module.scss'

export function Actions() {
  const { handleActionClick } = useContext(ProfileContext)
  
  return (
    <div className={styles.actions}>
      <button onClick={handleActionClick}>See repos</button>
      <button onClick={handleActionClick}>See starred</button>
    </div>
  )
}