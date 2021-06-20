import { useContext } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Actions } from '../components/Actions'
import { Repos } from '../components/Repos'
import { ProfileContext } from '../contexts/ProfileContext'


import styles from './Home.module.scss'

export default function Home() {
  const { showFav } = useContext(ProfileContext)
  
  return (
    <div className={styles.container}>
      <Head>
        <title>git_search</title>
        <meta name="description" content="Search for githubers" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.avatar}>
          <Image 
            width={200}
            height={200}
            src="https://github.com/mutheus.png" 
          />
          
          <h2>Matheus Almeida</h2>
        </div>
        
        <div className={styles.reposInfo}>
          <ul>
            <li>Repos: <span className={styles.numbers}>78</span></li>
            <li>Followers: <span className={styles.numbers}>14</span></li>
            <li>Following: <span className={styles.numbers}>35</span></li>
          </ul>
        </div>
       
        <Actions />
        
        { showFav ? (
          <Repos 
            title="Starred" 
            repos={[{
              name: "Favorite repository", 
              url: "#"
            }]} 
          />
        ) : (
          <Repos 
            title="Repos" 
            repos={[{
              name: "Nome do repositório", 
              url: "#"
            }]} 
          />
        )}
      </main>
    </div>
  )
}
