import { GetStaticProps } from 'next'
import { useContext } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Actions } from '../components/Actions'
import { Repos } from '../components/Repos'
import { ProfileContext } from '../contexts/ProfileContext'
import axios from 'axios'
import useSWR from 'swr'

import styles from './Home.module.scss'

const fetcher = url => axios.get(url).then(res => res.data)

export default function Home() {
  const { showFav, search, setIsInputDisabled } = useContext(ProfileContext)
  const url = `https://api.github.com/users/`
  const { data, error } = useSWR(`${url}${search}`, fetcher)
  const { data: repos } = useSWR(`${url}${search}/repos`)
  const { data: starred } = useSWR(`${url}${search}/starred`)
  
  if (!search) return <div className={styles.message}><h2>Welcome! Search for a user</h2></div>
  if (error) { 
    setIsInputDisabled(false)
    
    return (
      <div className={styles.message}><h2>User not found</h2></div>
    )
  }
  if (!data) return <div className={styles.message}><h2>Loading...</h2></div>
  
  const user = {
    login: data.login,
    name: data.name,
    avatar: data.avatar_url,
    repos: data.public_repos,
    followers: data.followers,
    following: data.following
  }
  
  setIsInputDisabled(false)
  
  return (
    <div className={styles.container}>
      <Head>
        <title>git_search</title>
        <meta name="description" content="Search for githubers" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      { user && (
        <main className={styles.main}>
          <div className={styles.avatar}>
            <Image 
              width={200}
              height={200}
              src={user.avatar}
              alt={user.name}
            />
            
            <h2><a href={`https://github.com/${user.login}`} target="blank">{user.name}</a></h2>
          </div>
          
          <div className={styles.reposInfo}>
            <ul>
              <li>Repos: <span className={styles.numbers}>{user.repos}</span></li>
              <li>Followers: <span className={styles.numbers}>{user.followers}</span></li>
              <li>Following: <span className={styles.numbers}>{user.following}</span></li>
            </ul>
          </div>
         
          <Actions />
          
          { showFav ? (
            <Repos 
              title="Starred" 
              repos={starred} 
            />
          ) : (
            <Repos 
              title="Repos" 
              repos={repos} 
            />
          )}
        </main>
      )}
    </div>
  )
}
