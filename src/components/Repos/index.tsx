import styles from './styles.module.scss'

type Repos = {
  name: string;
  url: string;
}

type ReposProps = {
  title: string;
  repos: Repos[];
}

export function Repos({ title, repos }: ReposProps) {
  return (
    <div className={styles.repos}>
      <h3>{title}</h3>
    
      <ul>
        { repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url}><h4>{repo.name}</h4></a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
