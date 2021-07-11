import styles from './styles.module.scss'

type Repos = {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

type ReposProps = {
  title: string;
  repos: Repos[];
}

export function Repos({ title, repos }: ReposProps) {
  if (!repos) return <div></div>
  
  return (
    <div className={styles.repos}>
      <h3>{title}</h3>
      
      <ul>
        { !!repos.length ? (
          repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url}><h4>{repo.name}</h4></a>
              <p>{repo.description}</p>
            </li>
          ))
        ) : (
          <span>Nothing in {title}</span>
        )}
      </ul>
    </div>
  )
}
